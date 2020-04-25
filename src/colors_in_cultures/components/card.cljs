(ns colors-in-cultures.components.card
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [cljss.core :refer-macros [defkeyframes]]))

(defkeyframes rotate-show []
  {:0%   {:opacity 0
          :transform "translateX(0px) rotate(0deg)"}
   :100% {:opacity 1}})

(defkeyframes rotate-hide []
  {:0%   {:opacity 1}
   :100% {:opacity 0
          :transform "translateX(0px) rotate(0deg)"}})

(rum/defcs card < (rum/local false ::selected?)
  [state title icon-url back-side show-animation? hide-animation?]
  (let [local-selected? (::selected? state)
        has-animation? (or show-animation? hide-animation?)]
    [:div {:on-click (when back-side (fn [_] (swap! local-selected? not))) 
           :style {:animation (when has-animation? 
                                (if hide-animation? 
                                  (str (rotate-hide) " " "650ms ease")
                                  (str (rotate-show) " " "650ms ease")))}
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
            :cursor (when back-side "pointer")
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
     [:div 
      {:css 
       {:text-align "center"
        :padding-top "6px"
        :padding-bottom "18px"
        :line-height "20px"
        :font-size "18px"
        :font-weight "500"}} 
      title]
     [:div 
      (if @local-selected?
        [:div back-side]
        [:img {:src icon-url
               :style { 
                        :width "100%" }}])]]))

