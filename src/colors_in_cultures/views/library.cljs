(ns colors-in-cultures.views.library
  (:require [rum.core :as rum]
            [colors-in-cultures.components.color-button :refer [color-button]]
            [colors-in-cultures.components.card :refer [card]]
            [colors-in-cultures.components.search-bar :refer [search-bar]]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.utils :refer [debounce]]
            [colors-in-cultures.db.query :refer [get-emotions get-color-code 
                                                 ; get-emotions-by-color 
                                                 get-colors]]))

(defonce state (atom {:search-query ""}))

; (def app-state (atom {:selected-color "black"}))

; (rum/defc current-color < rum/reactive []
;   [:div { :on-click (fn [_] (swap! app-state assoc :selected-color "red")) }
;     "Current color: " (rum/react (rum/cursor-in app-state [:selected-color]))])

; (rum/defc color-range < rum/reactive []
;   (let [colors (get-colors)
;         handle-select (fn [color] (swap! app-state assoc :selected-color (:color/name color)))
;         check-selected (fn [color] (= (:color/name color) 
;                                       (rum/react (rum/cursor-in app-state [:selected-color]))))]
;    [:div {:css
;           {:padding "20px"
;            ; :background-color "#dbeeff"
;            }}
;     [:div (current-color)] 
;     [:div {:css
;            {:display "flex"
;             :flex-wrap "wrap"
;             :justify-content "center"
;             :max-width "var(--md-width)"
;             :margin "auto"
;             "> *" {:margin "10px"}}} 
;      (for [color colors]
;        (-> (color-button color 
;                          (fn [] (handle-select color)) 
;                          (check-selected color))
;            (rum/with-key (:color/name color))))]]))

(rum/defc search []
  (let [handle-search (fn [query] (swap! state assoc :search-query query))
        debounced-search (debounce handle-search 10)]
    [:div {:css 
           {:display "flex"
            :justify-content "center"
            :position "sticky"
            :top "0px"
            :padding "10px"
            :z-index "10"
            :background-color "var(--main-color)"}} 
     (search-bar debounced-search)]))

(rum/defc nations-list [nations-colors]
  [:div {:css 
         {:display "flex"
          :flex-direction "column"
          :line-height "14px"
          :margin-top "16px"}} 
   (for [nat-col nations-colors]
     (let [nation (first nat-col)
           color (second nat-col)]
       [:div {:key (:nation/name nation)
              :css
              {:margin-bottom "8px"}} 
        [:div {:css
               {:display "flex"
                :align-items "center"}}
         [:div {:css 
                {:width "14px"
                 :height "11px"
                 :border-radius "4px"
                 :background-color (:color/code color)}
                :title (:color/name color)}]
         [:span
          {:css
           {:margin-left "8px"
            :font-size "13px"
            :width "100%"}}
          (:nation/name nation)]
         ]]))])

(rum/defc emotions-list < rum/reactive []
  (let [
        ; color (rum/react (rum/cursor-in app-state [:selected-color]))
        ; color-code (get-color-code color)
        ; emotions (get-emotions-by-color color)
        query (rum/react (rum/cursor-in state [:search-query])) 
        emotions (get-emotions query)
        ]
    [:div
     {:css
      {:padding-top "30px"
       :display "flex"
       :flex-wrap "wrap"
       :justify-content "center"
       "> *" {:margin "8px"}
       }}
     (for [entity emotions]
       (-> (card (:emotion/name (first entity)) 
                 (:emotion/icon (first entity))
                 (nations-list (second entity))
                 ; [:div "hi"]
                 ; (second entity)
                 ; color-code
                 )
           (rum/with-key (:emotion/id (first entity)))))]))

(rum/defc library < rum/reactive []
  (let [
        ; color (rum/react (rum/cursor-in app-state [:selected-color]))
        ; color-code (get-color-code color)
        ]
   [:div 
    (search)
    ; (color-range) 
    (emotions-list)
    ]))
