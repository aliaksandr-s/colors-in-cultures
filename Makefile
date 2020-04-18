repl:
	clj -R:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware cider.piggieback/wrap-cljs-repl]"
