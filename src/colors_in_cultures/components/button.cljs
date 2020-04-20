(ns colors-in-cultures.components.button
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]))

(rum/defcs button 
  < (rum/local false ::clicked?)       ; to handle animation on mobile devices 
  [state title color on-click]
  (let [local-clicked? (::clicked? state)
     swap-click #(swap! local-clicked? not)
     handle-click (fn [] 
                    (swap-click)
                    (js/setTimeout (fn [] (swap-click) (on-click)) 150))]
   [:button 
    {:css 
     {:min-width "100px"
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
      :box-shadow (if-not @local-clicked? (str "2px 2px 0.5px black"))
      :user-select "none"
      :&:hover {:color "white"}
      :&:active {:transform "scale(0.9) translateX(5px) translateY(5px)"
                 :box-shadow (str "0px 0px 0.5px black")}
      :transform (if @local-clicked? "scale(0.9) translateX(5px) translateY(5px)")
      :transition "all 150ms ease"}
     :on-click handle-click}
    title
    ]))
