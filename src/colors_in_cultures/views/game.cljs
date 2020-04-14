(ns colors-in-cultures.views.game
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.components.color-button :refer [color-button]]
            [colors-in-cultures.components.card :refer [card]]
            [colors-in-cultures.db.query :refer [game-seq get-colors]]))

(def total-questions 10)
(def color-choices 4)
(def points-reward 10)

(defonce state (atom {:score 0
                      :question-number 0
                      :game-seq (game-seq total-questions)}))

(def current-question 
  (rum/derived-atom [state] ::cur-question
                (fn [state]
                  (nth (:game-seq state) (:question-number state)))))

(defn prep-colors-to-select-from [colors correct-color n]
  (->> colors
       (filter #(not= (:color/name %) (:color/name correct-color)))
       shuffle
       (concat [correct-color])
       (take n)
       shuffle))

(defn update-score [correct selected]
  (println correct selected)
  (when (= correct selected) (swap! state update-in [:score] #(+ % points-reward))))

(rum/defc double-card [emotion nation]
  [:div 
   {:css
    {:display "flex"
     :justify-content "center"
     :align-items "center" 
     :position "relative"
     :width "400px"
     :height "300px"
     "> *" {:position "absolute !important" 
            :opacity "1 !important"}
     "> :first-child" {:transform "translateX(-75px) rotate(-20deg)"}
     "> :last-child"  {:transform "translateX(75px) rotate(26deg)"}}}
   (card (:emotion/name emotion) (:emotion/icon emotion))
   (card (:nation/name nation) (:nation/icon nation))])

(rum/defc color-range [colors]
  [:div {:css
         {:padding "10px"
          ; :background-color "#dbeeff"
          }}
   [:div {:css
          {:display "flex"
           :flex-wrap "wrap"
           :justify-content "center"
           ; :max-width "var(--md-width)"
           :margin "auto"
           "> *" {:margin "10px"}}} 
    (for [color colors]
      (-> (color-button color 
                        (fn [] 
                          (js/setTimeout 
                            (fn [] 
                              (update-score (get-in @current-question [:correct-color :color/name])
                                            (:color/name color))
                              (swap! state update-in [:question-number] inc)) 
                            500)
                          ; (update-score (get-in @current-question [:correct-color :color/name])
                          ;               (:color/name color))
                          ; (swap! state update-in [:question-number] inc)
                          ; (swap! state update-in [:score] #(+ % 10))
                          ) 
                        false)
          (rum/with-key (:color/name color))))]])

(rum/defc status-line [total-questions question-number score]
  [:div
   {:css 
    {:display "flex"
     :justify-content "space-between"
     :font-size "20px"
     :font-weight "500"}}
   [:div (str "Question: " (+ 1 question-number) "/" total-questions)]
   [:div (str "Score: " score)]])




(rum/defc next-button []
  (let [handle-click (fn [] (swap! state update-in [:question-number] inc))]
    [:button 
     {:on-click handle-click}
     "next"]))

(rum/defc prev-button []
  (let [handle-click (fn [] (swap! state update-in [:question-number] dec))]
    [:button 
     {:on-click handle-click}
     "prev"]))

(rum/defc game  < rum/reactive []
  (let [question-number (rum/react (rum/cursor-in state [:question-number]))
        score (rum/react (rum/cursor-in state [:score]))
        current-question (nth (:game-seq @state) question-number)
        colors (prep-colors-to-select-from (get-colors) 
                                           (:correct-color current-question) 
                                           color-choices)
        ]
    [:div 
     {:css
      {:display "flex"
       :flex-direction "column"
       :justify-content "space-between"
       :height "-webkit-fill-available"}}
     ; [:div {:css {:color "red"}} (str "Question: " (+ 1 question-number))]
     ; [:div {:css {:color "green"}} (str "Score: " score)]
     [:div
      {:css
       {:padding "20px"}}
      (status-line total-questions question-number score)
      ]
     ; [:div (str "Correct: " (get-in current-question [:correct-color :color/name]))]
     ; [:div (str colors)]
     ; [:div (str current-question)]
     [:div 
      {:css {:display "flex"
             :justify-content "center"}}
      (double-card 
        (:emotion current-question)
        (:nation current-question))
      ; [:div (get-in current-question [:emotion :emotion/name])]
      ; [:div (get-in current-question [:nation :nation/name])]
      ]
     [:div (color-range colors)]
     ]))

(rum/defc game1 []
  [:div 
   {:css 
    {:padding "20px"
     :max-width "450px"
     :margin "10% auto 0 auto"}}
   ; (qustion)
   ; [:div (color-button {:color/code "red"} #(println "hi") false)]
   [:div 
    {:css 
     {:padding "80px"
      :padding-left "200px"}}
    ; (double-card)
    ]
   ; (prev-button)
   ; [:div]
   ; (next-button)
   ])

(.log js/console (:game-seq @state))
