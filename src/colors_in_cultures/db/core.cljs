(ns colors-in-cultures.db.core
  (:require [datascript.core :as d]
            [clojure.string :as str]
            [colors-in-cultures.db.init-data :refer [schema init-data]]))

(defonce conn (d/create-conn schema))

(defn load-db! [conn data]
  (d/reset-conn! conn (d/empty-db schema))
  (doseq [d data]
    (d/transact! conn d)))

(load-db! conn init-data)
