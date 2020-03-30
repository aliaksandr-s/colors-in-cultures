(ns colors-in-cultures.utils
  (:require [goog.async.Debouncer]))

(defn debounce [f interval]
  (let [dbnc (goog.async.Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

; (defn save-input! [input]
;   (js/console.log "Saving input" input))

; (def save-input-debounced!
;   (debounce save-input! 5000))

; (save-input-debounced! "hi")
