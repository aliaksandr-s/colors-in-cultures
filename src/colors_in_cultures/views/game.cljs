(ns colors-in-cultures.views.game
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [reitit.frontend.easy :as rfe]
            [colors-in-cultures.components.color-button :refer [color-button]]
            [colors-in-cultures.components.button :refer [button]]
            [colors-in-cultures.components.card :refer [card]]
            [colors-in-cultures.utils :refer [preload-image]]
            [cljss.core :refer-macros [defkeyframes]]
            [colors-in-cultures.db.query :refer [game-seq get-colors]]))

; constants
(def total-questions 10)
(def color-choices   4)
(def points-reward   10)

; state
(def init-state {:score           0
                 :question-number 0
                 :game-seq        (game-seq total-questions)
                 :selected-color  nil})

(defonce state (atom init-state))

(def game-seq-state
  (rum/derived-atom [state] ::game-seq
                    (fn [state] (get-in state [:game-seq]))))

(def game-ended?
  (rum/derived-atom [state] ::game-ended
                    (fn [state] (= (:question-number state) total-questions))))

(def current-question 
  (rum/derived-atom [state] ::cur-question 
                    (fn [state] (when-not (= total-questions (:question-number state)) 
                                  (nth (:game-seq state) (:question-number state))))))

(def correct-color
  (rum/derived-atom [current-question] ::correct-color
                    (fn [current-question] (get-in current-question [:correct-color :color/name]))))

(def selected-color
  (rum/derived-atom [state] ::selected-color
                    (fn [state] (get-in state [:selected-color]))))

; side effects
(rum/derived-atom [game-seq-state] ::game-seq-watch
                  (fn [game-seq-state] 
                    (doseq [el game-seq-state]
                      (let [emotion-icon (get-in el [:emotion :emotion/icon])
                            nation-icon (get-in el [:nation :nation/icon])]
                        (preload-image nation-icon)
                        (preload-image emotion-icon)))))

; mutations
(defn reset-game! []
  (reset! state (conj init-state 
                      {:game-seq (game-seq total-questions)})))

(defn update-score [correct selected]
  (when (= correct selected) (swap! state update-in [:score] #(+ % points-reward))))

(defn current-question-inc []
  (when-not @game-ended? (swap! state update-in [:question-number] inc)))

(defn handle-color-click [color] 
  (fn [] 
    (when-not @selected-color
      (swap! state update-in [:selected-color] #(:color/name color))
      (update-score (get-in @current-question [:correct-color :color/name])
                    (:color/name color))
      (js/setTimeout 
        (fn [] 
          (current-question-inc)
          (swap! state update-in [:selected-color] (fn [] nil))) 
        750))))

; utils
(defn prep-colors-to-select-from [colors correct-color n]
  (->> colors
       (filter #(not= (:color/name %) (:color/name correct-color)))
       shuffle
       (concat [correct-color])
       (take n)
       shuffle))

(defn get-button-title-color [correct selected current]
  (cond 
    (and selected (= correct current)) "green"
    (= selected current)               "red"
    :else                              "black"))

; components
(rum/defc double-card < rum/reactive [emotion nation]
  (let [selected-color (rum/react selected-color)
        current-question (rum/react current-question)
        emotion (:emotion current-question)
        nation (:nation current-question)]
    [:div 
     {:css
      {:display "flex"
       :justify-content "center"
       :align-items "center" 
       :position "relative"
       ; :width "400px"
       :height "300px"
       "> *" {:position "absolute !important" 
              :opacity "1 !important"}
       "> :first-child" {:transform "translateX(-70px) rotate(-20deg)"}
       "> :last-child"  {:transform "translateX(70px) rotate(26deg)"}}}
     (card (:emotion/name emotion) (:emotion/icon emotion) nil true selected-color)
     (card (:nation/name nation) (:nation/icon nation) nil true selected-color)]))


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
     {:css
      {:text-align "center"
       :text-transform "capitalize"
       :font-weight "500"
       :color title-color
       }}
     (:color/name color)]
    (color-button color on-click)]))

(rum/defc color-range < rum/reactive [colors]
  (let [current-question (rum/react current-question)
        colors (prep-colors-to-select-from (get-colors) 
                                           (:correct-color current-question) 
                                           color-choices)] 
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
            (rum/with-key (:color/name color))))]]))

(rum/defc status-line < rum/reactive []
  (let [question-number (rum/react (rum/cursor-in state [:question-number]))
        score (rum/react (rum/cursor-in state [:score]))] 
   [:div
    {:css 
     {:display "flex"
      :justify-content "space-between"
      :font-size "20px"
      :font-weight "500"}}
    [:div (str "Question: " (+ 1 question-number) "/" total-questions)]
    [:div (str "Score: " score)]]))

(rum/defc start-over-banner < rum/reactive [score]
  (let [score (rum/cursor-in state [:score])]    
   [:div
    {:css
     {:font-size "20px"
      :display "flex"
      :flex-direction "column"
      :align-items "center"}}
    [:p 
     {:css 
      {:font-weight "600"
       :font-size "32px"}} 
     "Game over" ]
    [:p 
     {:css 
      {:font-weight "500"
       :padding-bottom "60px"}} 
     (str "Your score is: " @score)]
    [:div 
     {:css 
      {:padding-bottom "16px"}}
     (button "Play Again" "#5ac76c" #(reset-game!))]
    (button "Explore Library" "#50ade3" #(rfe/push-state :colors-in-cultures.core/library))
    ]))

(rum/defc game < rum/reactive []
  (let [game-ended? (rum/react game-ended?)]
    [:div 
     {:css
      {:display "flex"
       :flex-direction "column"
       :justify-content "space-between"
       :height "100%"}}
     [:div
      {:css
       {:padding "20px"}}
      (when-not game-ended? 
        (status-line))]
     [:div 
      {:css {:display "flex"
             :justify-content "center"}}
      (if game-ended? 
        (start-over-banner)
        (double-card))]
     [:div {:css {:padding-bottom "20px"}}
      (when-not game-ended?
        (color-range))]]))
