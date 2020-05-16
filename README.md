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

## Dev process with Vim and fireplace

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

## Dev process with Vim and IcedVim

1. Run iced command from a terminal:

```
iced repl --with-cljs
```

2. Run a project from the terminal nrepl:

```
(do (require 'figwheel.main.api) (figwheel.main.api/start "dev"))
```

3. Connect to a running repl from vim:

```
:IcedConnect {port}
:IcedCljsRepl (figwheel.main.api/repl-env "dev")
```

## Set up git worktree for deployment

- `git checkout --orphan gh-pages`
- `git reset --hard`
- `git commit --allow-empty -m "Initializing gh-pages branch"`
- `git checkout master`
- `git worktree add www gh-pages`
- `echo "www" >> .gitignore`

<!--
## To Do:

- inline svg ?
- turned first card in library ?
- signature ?
- ci ?
- route change animation ?
- banner animation ?
- pwa ?
- link to menu ?
-->
