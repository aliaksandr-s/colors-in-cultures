(ns colors-in-cultures.views.library
  (:require [rum.core :as rum]
            [colors-in-cultures.components.card :refer [card]]
            [colors-in-cultures.components.search-bar :refer [search-bar]]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.utils :refer [debounce]]
            [colors-in-cultures.db.query :refer [get-emotions get-color-code get-colors get-nations]]))

(defonce state (atom {:search-query ""}))

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
     (search-bar debounced-search (:search-query @state))]))

(rum/defc nations-list [nations-colors]
  [:div {:css 
         {:display "flex"
          :flex-direction "column"
          :line-height "14px"}} 
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
  (let [query (rum/react (rum/cursor-in state [:search-query])) 
        emotions (get-emotions query)]
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
                 (nations-list (second entity)))
           (rum/with-key (:emotion/id (first entity)))))]))

(rum/defc n-list []
  (let [nations (get-nations)]
    [:div
     {:css
      {:padding-top "30px"
       :display "flex"
       :flex-wrap "wrap"
       :justify-content "center"
       "> *" {:margin "8px"}}}
     (for [entity nations]
       (-> (card (:nation/name entity) 
                 (:nation/icon entity))
           (rum/with-key (:nation/id entity))))]))

(rum/defc library []
  [:div 
   {:css {:padding-bottom "30px"}}
   (search)
   ; (n-list)
   (emotions-list)])
