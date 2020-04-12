(ns colors-in-cultures.components.color-button
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]))

(def reset-clicked-mixin
  {:did-remount (fn [old-state state] 
                  (reset! (::handled-click? state) false)
                  state)})

(rum/defcs color-button 
  < (rum/local false ::clicked?)       ; to handle animation on mobile devices 
    (rum/local false ::handled-click?) ; to prevent handling multiple clicks on the same button
    reset-clicked-mixin
  [state color on-click selected?]
  (let [local-clicked? (::clicked? state)
        local-handled-click? (::handled-click? state)
        swap-click #(swap! local-clicked? not)
        swap-handled-click #(swap! local-handled-click? not)
        handle-click (fn [] 
                       (when-not @local-handled-click?
                         (swap-handled-click)
                         (swap-click)
                         (js/setTimeout swap-click 150)
                         (on-click)))]
    [:div 
     [:div 
      {:css
       {:text-align "center"
        :text-transform "capitalize"
        :margin-bottom "6px"}}
      (:color/name color)]
     [:div 
      {:on-click handle-click
       :css {:display "inline-block"}
       }
      [:div 
       {:css 
        {:width "50px"
         :height "50px"
         :position "relative"
         :border "3px solid black"
         :opacity (if selected? 1 0.7) 
         :border-radius "20%" 
         :cursor "pointer"
         :background-color (:color/code color)
         :&:hover {:opacity 1}
         :&:active {:transform "scale(0.9) translateX(5px) translateY(5px)"}
         :transform (if @local-clicked? "scale(0.9) translateX(5px) translateY(5px)")
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
                    :transform (if @local-clicked? "translateX(-2px) translateY(-2px)")
                    :visibility (if @local-clicked? "hidden")
                    }
         :&:active:before {:transform "translateX(-2px) translateY(-2px)"
                           :visibility "hidden"} 
         }}]]]))
