(ns colors-in-cultures.components.button
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]))

(rum/defc button [title color on-click]
  [:button 
   {:css 
    {
     :min-width "100px"
     :text-align "center"
     :font-weight "600"
     :font-size "18px"
     :outline "none"
     :padding "8px 14px"
     :position "relative"
     :border "2px solid black"
     :border-radius "6px" 
     :cursor "pointer"
     :background-color color
     :box-shadow (str "2px 2px 0.5px black")
     :user-select "none"
     :&:hover {:color "white"}
     :&:active {:transform "scale(0.9) translateX(5px) translateY(5px)"
                :box-shadow (str "0px 0px 0.5px black")}
     :transition "all 150ms ease"}
    :on-click on-click}
   title
   ])
