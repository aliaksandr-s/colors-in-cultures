(ns colors-in-cultures.views.game
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.components.color-button :refer [color-button]]
            [colors-in-cultures.components.card :refer [card]]
            [colors-in-cultures.db.query :refer [game-seq get-colors]]))

(def number-of-questions 10)
(def color-choices 4)
(def points-reward 10)

(defonce state (atom {:score 0
                      :question-number 0
                      :game-seq (game-seq number-of-questions)}))

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


(rum/defc qustion < rum/reactive []
  (let [qustion-number (rum/react (rum/cursor-in state [:question-number]))
        score (rum/react (rum/cursor-in state [:score]))
        current-question (nth (:game-seq @state) qustion-number)
        colors (prep-colors-to-select-from (get-colors) 
                                           (:correct-color current-question) 
                                           color-choices)
        ]
    [:div 
     [:div {:css {:color "red"}} (str "Question: " (+ 1 qustion-number))]
     [:div {:css {:color "green"}} (str "Score: " score)]
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

(rum/defc game []
  [:div 
   {:css {:padding "10px"}}
   (qustion)
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
