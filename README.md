# Colors in Cultures

## Requirements

1. Add these dependencies to /home/{username}/.clojure/deps.edn:

```
:aliases {:nrepl
          {:extra-deps
           {nrepl/nrepl {:mvn/version "0.6.0"}
            cider/cider-nrepl {:mvn/version "0.23.0"}
            cider/piggieback {:mvn/version "0.4.2"}}}}
```

## Dev process with Vim

1. Run a project from a terminal with the next command:

```
clj -R:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware cider.piggieback/wrap-cljs-repl]"
```

2. Connect to the nREPL from vim using:

```
:Connect nrepl://localhost:{port}
```

3. Start the figwheel REPL and connect to it:

```clojure
:CljEval (do (require 'figwheel.main.api) (figwheel.main.api/start "dev"))
:CljEval (figwheel.main.api/cljs-repl "dev") 
```

## To Do:

1. Add "all button" to show all emotions
2. Update icons 
3. Add icons for nations
4. Add game mode 