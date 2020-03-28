(ns colors-in-cultures.components.color-button
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]))

(rum/defc color-button [color on-click selected?]
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
      :position "relative"
      :border "3px solid black"
      :opacity (if selected? 1 0.5) 
      :border-radius "20%" 
      :cursor "pointer"
      :background-color (:color/code color)
      :&:hover {:opacity 1}
      :&:active {:transform "scale(0.9) translateX(5px) translateY(5px)"}
      :transform (if selected? "scale(0.9) translateX(5px) translateY(5px)")
      :transition "all 150ms ease"
      :&:before {:content ""
                 :position "absolute"
                 :left "-3px"
                 :top "-3px"
                 :border-radius "20%" 
                 :width "50px"
                 :height "50px"
                 :border "3px solid transparent"
                 :box-shadow (str "2px 2px 0.5px black")
                 :transition "all 100ms"
                 :transform (if selected? "translateX(-2px) translateY(-2px)")
                 :visibility (if selected? "hidden")}
      :&:active:before {:transform "translateX(-2px) translateY(-2px)"
                        :visibility "hidden"} }
     :on-click on-click}]])
