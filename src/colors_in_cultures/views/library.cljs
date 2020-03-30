(ns colors-in-cultures.views.library
  (:require [rum.core :as rum]
            [colors-in-cultures.components.color-button :refer [color-button]]
            [colors-in-cultures.components.card :refer [card]]
            [colors-in-cultures.components.search-bar :refer [search-bar]]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.db :refer [get-emotions get-color-code get-emotions-by-color get-colors app-state]]))

(defonce state (atom {:search-query ""}))

(rum/defc current-color < rum/reactive []
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
    [:div (current-color)] 
    [:div {:css
           {:display "flex"
            :flex-wrap "wrap"
            :justify-content "center"
            :max-width "var(--md-width)"
            :margin "auto"
            "> *" {:margin "10px"}}} 
     (for [color colors]
       (-> (color-button color 
                         (fn [] (handle-select color)) 
                         (check-selected color))
           (rum/with-key (:color/name color))))]]))

(rum/defc search []
  (let [handle-search (fn [query] (swap! state assoc :search-query query))]
    [:div {:css 
           {:display "flex"
            :justify-content "center"
            :position "sticky"
            :top "0px"
            :padding "10px"
            :z-index "10"
            :background-color "var(--main-color)"}} 
     (search-bar handle-search)]))

(rum/defc emotions-list < rum/reactive []
  (let [color (rum/react (rum/cursor-in app-state [:selected-color]))
        color-code (get-color-code color)
        ; emotions (get-emotions-by-color color)
        query (rum/react (rum/cursor-in state [:search-query])) 
        emotions (get-emotions query)
        ]
    [:div
     {:css
      {:padding-top "30px"
       :display "flex"
       :flex-wrap "wrap"
       :justify-content "center"}}
     (for [entity emotions]
       (-> (card (:emotion/name (first entity)) 
                 (:emotion/icon (first entity))
                 [:div "hi"]
                 ; (second entity)
                 color-code)
           (rum/with-key (:emotion/id (first entity)))))]))

(rum/defc library < rum/reactive []
  (let [color (rum/react (rum/cursor-in app-state [:selected-color]))
        color-code (get-color-code color)]
   [:div 
    (search)
    ; (color-range) 
    (emotions-list)
    ]))
