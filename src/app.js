import 'github-markdown-css'
import 'codemirror/lib/codemirror.css'
import './theme-cssedit.css'
import 'highlight.js/styles/github.css'
import './stylesheet.css'

import marked from 'marked'
import Codemirror from 'codemirror'
import hljs from 'highlight.js'
import 'codemirror/mode/markdown/markdown'
import debounce from 'lodash.debounce'

document.addEventListener('DOMContentLoaded', () => {
	const output = document.getElementById('output')
	const editor = Codemirror.fromTextArea(document.getElementById('input'), {
		mode: 'markdown',
		theme: 'cssedit'
	})

	const highlightCode = () => {
		for (const code of output.querySelectorAll('pre > code')) {
			hljs.highlightBlock(code)
		}
	}
	const debouncedHighlightCode = debounce(highlightCode, 200)

	editor.on('change', (cm) => {
		output.innerHTML = marked(cm.getValue())
		debouncedHighlightCode()
	})

	output.innerHTML = marked(editor.getValue())
	highlightCode()
})