(ns colors-in-cultures.components.color
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.db :refer [conn get-colors app-state]]))


(rum/defc color-select [color on-click selected?]
  [:div 
   [:div 
    {:css
     {:text-align "center"
      :text-transform "capitalize"
      :margin-bottom "6px"}}
    (:color/name color)]
   [:div 
    {:css 
     {:width "50px"
      :height "50px"
      :border "3px solid black"
      ; :box-shadow (str "3px 3px black")
      :opacity (if selected? 1 0.5) 
      ; :border-radius (if selected? "50%" "20%") 
      :border-radius "20%" 
      :cursor "pointer"
      :background-color (:color/code color)
      :&:hover {:opacity 1}
      :&:active {:transform "scale(0.9) translateX(5px) translateY(5px)"}
      ; :-webkit-transition "opacity 200ms, transform 200ms"
      ; :-webkit-transition "-webkit-transform 200ms"
      :transition "transform 150ms"
      :&:before {:content ""
                 :position "absolute"
                 :border-radius "20%" 
                 :width "52px"
                 :height "52px"
                 :box-shadow (str "3px 3px black")
                 :transition "all 100ms"
                 ; :transform "scale(0.9) translateX(5px) translateY(5px)"
                 }
      :&:active:before {
                        :transform "translateX(-2px) translateY(-2px)"
                        :visibility "hidden"}
      }
     :on-click on-click}]])


(rum/defc counter < rum/reactive []
  [:div { :on-click (fn [_] (swap! app-state assoc :selected-color "red")) }
    "Current color: " (rum/react (rum/cursor-in app-state [:selected-color]))])


(rum/defc color-range < rum/reactive []
  (let [colors (get-colors)
        handle-select (fn [color] (swap! app-state assoc :selected-color (:color/name color)))
        check-selected (fn [color] (= (:color/name color) 
                                      (rum/react (rum/cursor-in app-state [:selected-color]))))]
   [:div {:css
          {:padding "20px"
           ; :background-color "#dbeeff"
           }}
    [:div (counter)] 
    [:div {:css
           {:display "flex"
            :flex-wrap "wrap"
            :justify-content "center"
            :max-width "var(--md-width)"
            :margin "auto"
            "> *" {:margin "10px"}}} 
     (for [color colors]
       (-> (color-select color 
                         (fn [] (handle-select color)) 
                         (check-selected color))
           (rum/with-key (:color/name color))))]]))



