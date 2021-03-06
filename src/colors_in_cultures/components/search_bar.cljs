(ns colors-in-cultures.components.search-bar
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]))

(rum/defc search-bar [on-select value]
  [:input {:type "search"
           :placeholder "Search..."
           :value value
           :on-change (fn [e] (on-select (-> e .-target .-value)))
           :css {
                 :width "18rem"
                 :max-width "18rem"
                 :border "2px solid black"
                 :border-radius "15px"
                 :font-weight "600"
                 :outline "none"
                 :font-size "20px"
                 :padding "6px 12px"
                 :box-shadow "1px 1px black"
                 }}])
