(ns colors-in-cultures.views.game
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.components.color-button :refer [color-button]]
            [colors-in-cultures.components.card :refer [card]]
            [cljss.core :refer-macros [defkeyframes]]
            [colors-in-cultures.db.query :refer [game-seq get-colors]]))

; constants
(def total-questions 10)
(def color-choices 4)
(def points-reward 10)

; state
(defonce state (atom {:score           0
                      :question-number 0
                      :game-seq        (game-seq total-questions)
                      :selected-color  nil}))

(def current-question 
  (rum/derived-atom [state] ::cur-question 
                    (fn [state] (nth (:game-seq state) (:question-number state)))))

(def correct-color
  (rum/derived-atom [current-question] ::correct-color
                    (fn [current-question] (get-in current-question [:correct-color :color/name]))))

(def selected-color
  (rum/derived-atom [state] ::selected-color
                    (fn [state] (get-in state [:selected-color]))))


; mutations
(defn update-score [correct selected]
  (when (= correct selected) (swap! state update-in [:score] #(+ % points-reward))))

(defn handle-color-click [color] 
  (fn [] 
    (when-not @selected-color
     (swap! state update-in [:selected-color] #(:color/name color))
     (js/setTimeout 
       (fn [] 
         (update-score (get-in @current-question [:correct-color :color/name])
                       (:color/name color))
         (swap! state update-in [:question-number] inc)
         (swap! state update-in [:selected-color] (fn [] nil))
         ) 
       650)
     )
    ))

; utils
(defn prep-colors-to-select-from [colors correct-color n]
  (->> colors
       (filter #(not= (:color/name %) (:color/name correct-color)))
       shuffle
       (concat [correct-color])
       (take n)
       shuffle))

(defn get-button-title-color [correct selected current]
  (println correct selected current)
  (cond 
    (and selected (= correct current)) "green"
    (= selected current)               "red"
    :else                              "black"))

(rum/defc double-card < rum/reactive [emotion nation]
  (let [ selected-color (rum/react selected-color) ]
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
     (card (:emotion/name emotion) (:emotion/icon emotion) nil true selected-color)
     (card (:nation/name nation) (:nation/icon nation) nil true selected-color)]))


; (defkeyframes show []
;   {:0%   {:opacity 0}
;    :25%  {:opacity 0.25}
;    :50%  {:opacity 0.5}
;    :75%  {:opacity 0.75}
;    :100% {:opacity 1}})

(defkeyframes show []
  {:0%   {
          :opacity 0
          ; :bottom "-25px"
          :font-size "0px"
          }
   ; :25%  {
   ;        :opacity 0.25
   ;        ; :bottom "-20px"
   ;        :font-size "3px"
   ;        }
   ; :50%  {
   ;        :opacity 0.5
   ;        ; :bottom "-15px"
   ;        :font-size "0px"
   ;        }
   ; :75%  {
   ;        :opacity 0.75
   ;        ; :bottom "-10px"
   ;        :font-size "0px"
   ;        }
   :100% {
          :opacity 1
          ; :bottom "-5px"
          :font-size "16px"
          }})

(rum/defc color-button-with-title < rum/reactive 
  [color on-click status]
  (let [selected-color (rum/react (rum/cursor-in state [:selected-color]))
        title-color (get-button-title-color @correct-color selected-color (:color/name color))]
   [:div
    {:css
     {:display "flex"
      :flex-direction "column"}
     }
    [:div 
     {
      ; :style {:animation (when (not= title-color "black") (str (show) " " "350ms ease"))}
      :css
      {:text-align "center"
       :text-transform "capitalize"
       :margin-bottom "6px"
       :color title-color
       ; :position "relative"
       }}
     (:color/name color)]
    (color-button color on-click)]))

(rum/defc color-range [colors]
  [:div {:css
         {:padding "10px"}}
   [:div {:css
          {:display "flex"
           :flex-wrap "wrap"
           :justify-content "center"
           :margin "auto"
           "> *" {:margin "10px"}}} 
    (for [color colors]
      (-> (color-button-with-title 
            color 
            (handle-color-click color))
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

(rum/defc game < rum/reactive []
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
     ; [:div @selected-color]
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
     [:div {:css {:padding-bottom "20px"}}
      (color-range colors)]
     ]))


(.log js/console (:game-seq @state))
