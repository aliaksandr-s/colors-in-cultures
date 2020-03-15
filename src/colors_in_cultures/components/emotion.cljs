(ns colors-in-cultures.components.emotion
  (:require [rum.core :as rum]
            [colors-in-cultures.db :refer [conn get-emotions-by-color app-state get-color-code]]))

(rum/defc emotion [title icon-url info color]
  [:div {:style 
         {:padding "10px"
          :margin "5px"
          :width "80px"
          :font-size "16px"
          :display "inline-block"
          ; :border (str "3px solid" " " color)
          :border "3px solid black" 
          :box-shadow (str "3px 3px" " " color)
          :border-radius "15%"
          :text-transform "Capitalize"}} 
   [:div {:style 
          {:text-align "center"
           :padding-bottom "8px"}} 
    title]
   [:img {:src icon-url}]
   ; [:div {:style 
   ;        {:text-align "center"}} info]
   ])


(rum/defc emotions-list < rum/reactive []
  (let [color (rum/react (rum/cursor-in app-state [:selected-color]))
        color-code (get-color-code color)
        emotions (get-emotions-by-color color)]
    [:div
     {:css
      {:padding-top "30px"
       :display "flex"
       :flex-wrap "wrap"
       :justify-content "center"}}
     (for [entity emotions]
       (-> (emotion (:emotion/name (first entity)) 
                    (:emotion/icon (first entity))
                    (str (second entity))
                    color-code)
           (rum/with-key (:emotion/id (first entity)))))]))

