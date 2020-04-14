(ns colors-in-cultures.components.card
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [cljss.core :refer-macros [defkeyframes]]))

(defkeyframes show []
  {:0%   {:opacity 0}
   :25%  {:opacity 0.25}
   :50%  {:opacity 0.5}
   :75%  {:opacity 0.75}
   :100% {:opacity 1}})

(rum/defcs card < (rum/local false ::selected?)
  [state title icon-url back-side]
  (let [local-selected? (::selected? state)]
    [:div {:on-click (when back-side (fn [_] (swap! local-selected? not))) 
           :css 
           {:padding "10px"
            :user-select "none" 
            :width "120px"
            :height "195px"
            :position "relative"
            :font-size "16px"
            :display "inline-block"
            :border "3px solid black" 
            :border-radius "15%"
            :background-color "var(--accent-color)"
            :text-transform "Capitalize"
            :cursor "pointer"
            :opacity (if @local-selected? 1 0.7)
            :&:hover {:opacity 1}
            :transition "all 150ms ease"
            :transform (if @local-selected? "translateX(5px) translateY(5px)")
            :&:before {:content ""
                       :position "absolute"
                       :top "-3px"
                       :left "-3px"
                       :border "3px solid black" 
                       :border-radius "15%" 
                       :width "120px"
                       :height "195px"
                       :padding "10px"
                       :box-shadow (str "2px 2px" " " "black")
                       :transition "all 100ms"
                       :transform (if @local-selected? "translateX(-1px) translateY(-1px)")
                       :opacity (if @local-selected? "0")
                       :visibility (if @local-selected? "hidden")
                       }}} 
     [:div {:css 
            {:text-align "center"
             :padding-top "6px"
             :line-height "20px"
             :font-size "18px"
             :font-weight "500"
             ; :padding-bottom "6px"
             }} 
      title]
     [:div 
      (if @local-selected?
        [:div
         ; {:style {:animation (str (show) " " "50ms ease 1")}}
         ; (nations-list info)
         back-side
         ]
        [:img {:src icon-url
               :style {
                       :margin-top "22px"
                       ; :animation (str (show) " " "30ms ease 1")
                       }}])]
     ]))

