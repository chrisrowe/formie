/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fields/rich-text.js":
/*!************************************!*\
  !*** ./src/js/fields/rich-text.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormieRichText\": () => (/* binding */ FormieRichText)\n/* harmony export */ });\n/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pell */ \"../../../../node_modules/pell/dist/pell.min.js\");\n/* harmony import */ var pell__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pell__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar FormieRichText = /*#__PURE__*/function () {\n  function FormieRichText() {\n    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, FormieRichText);\n\n    this.$form = settings.$form;\n    this.form = this.$form.form;\n    this.$field = settings.$field.querySelector('textarea');\n    this.$container = settings.$field.querySelector('[data-rich-text]');\n    this.scriptId = 'FORMIE_FONT_AWESOME_SCRIPT';\n    this.buttons = settings.buttons;\n\n    if (this.$field && this.$container) {\n      this.initEditor();\n    } else {\n      console.error('Unable to find rich text field “[data-rich-text]”');\n    }\n  }\n\n  _createClass(FormieRichText, [{\n    key: \"getButtons\",\n    value: function getButtons() {\n      var buttonDefinitions = [{\n        name: 'bold',\n        icon: '<i class=\"far fa-bold\"></i>'\n      }, {\n        name: 'italic',\n        icon: '<i class=\"far fa-italic\"></i>'\n      }, {\n        name: 'underline',\n        icon: '<i class=\"far fa-underline\"></i>'\n      }, {\n        name: 'strikethrough',\n        icon: '<i class=\"far fa-strikethrough\"></i>'\n      }, {\n        name: 'heading1',\n        icon: '<i class=\"far fa-h1\"></i>'\n      }, {\n        name: 'heading2',\n        icon: '<i class=\"far fa-h2\"></i>'\n      }, {\n        name: 'paragraph',\n        icon: '<i class=\"far fa-paragraph\"></i>'\n      }, {\n        name: 'quote',\n        icon: '<i class=\"far fa-quote-right\"></i>'\n      }, {\n        name: 'olist',\n        icon: '<i class=\"far fa-list-ol\"></i>'\n      }, {\n        name: 'ulist',\n        icon: '<i class=\"far fa-list-ul\"></i>'\n      }, {\n        name: 'code',\n        icon: '<i class=\"far fa-code\"></i>'\n      }, {\n        name: 'line',\n        icon: '<i class=\"far fa-horizontal-rule\"></i>'\n      }, {\n        name: 'link',\n        icon: '<i class=\"far fa-link\"></i>'\n      }, {\n        name: 'image',\n        icon: '<i class=\"far fa-image\"></i>'\n      }, {\n        name: 'alignleft',\n        icon: '<i class=\"far fa-align-left\"></i>',\n        title: 'Align Left',\n        result: function result() {\n          return (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('justifyLeft', '');\n        }\n      }, {\n        name: 'aligncenter',\n        icon: '<i class=\"far fa-align-center\"></i>',\n        title: 'Align Center',\n        result: function result() {\n          return (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('justifyCenter', '');\n        }\n      }, {\n        name: 'alignright',\n        icon: '<i class=\"far fa-align-right\"></i>',\n        title: 'Align Right',\n        result: function result() {\n          return (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('justifyRight', '');\n        }\n      }, {\n        name: 'clear',\n        icon: '<i class=\"far fa-eraser\"></i>',\n        title: 'Clear',\n        result: function result() {\n          if (window.getSelection().toString()) {\n            var linesToDelete = window.getSelection().toString().split('\\n').join('<br>');\n            (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('formatBlock', '<p>');\n            document.execCommand('insertHTML', false, linesToDelete);\n          } else {\n            (0,pell__WEBPACK_IMPORTED_MODULE_0__.exec)('formatBlock', '<p>');\n          }\n        }\n      }];\n\n      if (!this.buttons) {\n        this.buttons = ['bold', 'italic'];\n      }\n\n      var buttons = [];\n      this.buttons.forEach(function (button) {\n        var found = buttonDefinitions.find(function (element) {\n          return element.name === button;\n        });\n\n        if (found) {\n          buttons.push(found);\n        }\n      });\n      return buttons;\n    }\n  }, {\n    key: \"initEditor\",\n    value: function initEditor() {\n      var _this = this;\n\n      // Assign this instance to the field's DOM, so it can be accessed by third parties\n      this.$field.richText = this; // Load in FontAwesome, for better icons. Only load once though\n\n      if (!document.getElementById(this.scriptId)) {\n        var $script = document.createElement('script');\n        $script.src = 'https://kit.fontawesome.com/bfee7f35b7.js';\n        $script.id = this.scriptId;\n        $script.defer = true;\n        $script.async = true;\n        $script.setAttribute('crossorigin', 'anonymous');\n        document.body.appendChild($script);\n      }\n\n      this.editor = (0,pell__WEBPACK_IMPORTED_MODULE_0__.init)({\n        element: this.$container,\n        defaultParagraphSeparator: 'p',\n        styleWithCSS: true,\n        actions: this.getButtons(),\n        onChange: function onChange(html) {\n          _this.$field.textContent = html;\n        },\n        classes: {\n          actionbar: 'fui-rich-text-toolbar',\n          button: 'fui-rich-text-button',\n          content: 'fui-input fui-rich-text-content',\n          selected: 'fui-rich-text-selected'\n        }\n      }); // Populate any values initially set\n\n      this.editor.content.innerHTML = this.$field.textContent;\n    }\n  }]);\n\n  return FormieRichText;\n}();\nwindow.FormieRichText = FormieRichText;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vLy4vc3JjL2pzL2ZpZWxkcy9yaWNoLXRleHQuanM/Y2M0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleGVjLCBpbml0IH0gZnJvbSAncGVsbCc7XG5cbmV4cG9ydCBjbGFzcyBGb3JtaWVSaWNoVGV4dCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gc2V0dGluZ3MuJGZvcm07XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuJGZvcm0uZm9ybTtcbiAgICAgICAgdGhpcy4kZmllbGQgPSBzZXR0aW5ncy4kZmllbGQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gc2V0dGluZ3MuJGZpZWxkLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJpY2gtdGV4dF0nKTtcbiAgICAgICAgdGhpcy5zY3JpcHRJZCA9ICdGT1JNSUVfRk9OVF9BV0VTT01FX1NDUklQVCc7XG5cbiAgICAgICAgdGhpcy5idXR0b25zID0gc2V0dGluZ3MuYnV0dG9ucztcblxuICAgICAgICBpZiAodGhpcy4kZmllbGQgJiYgdGhpcy4kY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRFZGl0b3IoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmaW5kIHJpY2ggdGV4dCBmaWVsZCDigJxbZGF0YS1yaWNoLXRleHRd4oCdJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCdXR0b25zKCkge1xuICAgICAgICBsZXQgYnV0dG9uRGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2JvbGQnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1ib2xkXCI+PC9pPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdpdGFsaWMnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1pdGFsaWNcIj48L2k+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3VuZGVybGluZScsXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFyIGZhLXVuZGVybGluZVwiPjwvaT4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnc3RyaWtldGhyb3VnaCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFyIGZhLXN0cmlrZXRocm91Z2hcIj48L2k+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2hlYWRpbmcxJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJmYXIgZmEtaDFcIj48L2k+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2hlYWRpbmcyJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJmYXIgZmEtaDJcIj48L2k+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ3BhcmFncmFwaCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFyIGZhLXBhcmFncmFwaFwiPjwvaT4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAncXVvdGUnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1xdW90ZS1yaWdodFwiPjwvaT4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnb2xpc3QnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1saXN0LW9sXCI+PC9pPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICd1bGlzdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogJzxpIGNsYXNzPVwiZmFyIGZhLWxpc3QtdWxcIj48L2k+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvZGUnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1jb2RlXCI+PC9pPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJmYXIgZmEtaG9yaXpvbnRhbC1ydWxlXCI+PC9pPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsaW5rJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJmYXIgZmEtbGlua1wiPjwvaT4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1pbWFnZVwiPjwvaT4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnYWxpZ25sZWZ0JyxcbiAgICAgICAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJmYXIgZmEtYWxpZ24tbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxpZ24gTGVmdCcsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAoKSA9PiBleGVjKCdqdXN0aWZ5TGVmdCcsICcnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FsaWduY2VudGVyJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnPGkgY2xhc3M9XCJmYXIgZmEtYWxpZ24tY2VudGVyXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBbGlnbiBDZW50ZXInLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogKCkgPT4gZXhlYygnanVzdGlmeUNlbnRlcicsICcnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ2FsaWducmlnaHQnLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1hbGlnbi1yaWdodFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQWxpZ24gUmlnaHQnLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogKCkgPT4gZXhlYygnanVzdGlmeVJpZ2h0JywgJycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xlYXInLFxuICAgICAgICAgICAgICAgIGljb246ICc8aSBjbGFzcz1cImZhciBmYS1lcmFzZXJcIj48L2k+JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NsZWFyJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZXNUb0RlbGV0ZSA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGVjKCdmb3JtYXRCbG9jaycsICc8cD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIGxpbmVzVG9EZWxldGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhlYygnZm9ybWF0QmxvY2snLCAnPHA+Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoIXRoaXMuYnV0dG9ucykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zID0gWydib2xkJywgJ2l0YWxpYyddO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBbXTtcblxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gYnV0dG9uRGVmaW5pdGlvbnMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gYnV0dG9uKTtcblxuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGZvdW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XG4gICAgfVxuXG4gICAgaW5pdEVkaXRvcigpIHtcbiAgICAgICAgLy8gQXNzaWduIHRoaXMgaW5zdGFuY2UgdG8gdGhlIGZpZWxkJ3MgRE9NLCBzbyBpdCBjYW4gYmUgYWNjZXNzZWQgYnkgdGhpcmQgcGFydGllc1xuICAgICAgICB0aGlzLiRmaWVsZC5yaWNoVGV4dCA9IHRoaXM7XG5cbiAgICAgICAgLy8gTG9hZCBpbiBGb250QXdlc29tZSwgZm9yIGJldHRlciBpY29ucy4gT25seSBsb2FkIG9uY2UgdGhvdWdoXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zY3JpcHRJZCkpIHtcbiAgICAgICAgICAgIHZhciAkc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICAkc2NyaXB0LnNyYyA9ICdodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYmZlZTdmMzViNy5qcyc7XG4gICAgICAgICAgICAkc2NyaXB0LmlkID0gdGhpcy5zY3JpcHRJZDtcbiAgICAgICAgICAgICRzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgICAgICAgICAgJHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgICAgICAkc2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRzY3JpcHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lZGl0b3IgPSBpbml0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuJGNvbnRhaW5lcixcbiAgICAgICAgICAgIGRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3I6ICdwJyxcbiAgICAgICAgICAgIHN0eWxlV2l0aENTUzogdHJ1ZSxcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuZ2V0QnV0dG9ucygpLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGh0bWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGZpZWxkLnRleHRDb250ZW50ID0gaHRtbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uYmFyOiAnZnVpLXJpY2gtdGV4dC10b29sYmFyJyxcbiAgICAgICAgICAgICAgICBidXR0b246ICdmdWktcmljaC10ZXh0LWJ1dHRvbicsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2Z1aS1pbnB1dCBmdWktcmljaC10ZXh0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAnZnVpLXJpY2gtdGV4dC1zZWxlY3RlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQb3B1bGF0ZSBhbnkgdmFsdWVzIGluaXRpYWxseSBzZXRcbiAgICAgICAgdGhpcy5lZGl0b3IuY29udGVudC5pbm5lckhUTUwgPSB0aGlzLiRmaWVsZC50ZXh0Q29udGVudDtcbiAgICB9XG59XG5cbndpbmRvdy5Gb3JtaWVSaWNoVGV4dCA9IEZvcm1pZVJpY2hUZXh0O1xuIl0sIm5hbWVzIjpbImV4ZWMiLCJpbml0IiwiRm9ybWllUmljaFRleHQiLCJzZXR0aW5ncyIsIiRmb3JtIiwiZm9ybSIsIiRmaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCIkY29udGFpbmVyIiwic2NyaXB0SWQiLCJidXR0b25zIiwiaW5pdEVkaXRvciIsImNvbnNvbGUiLCJlcnJvciIsImJ1dHRvbkRlZmluaXRpb25zIiwibmFtZSIsImljb24iLCJ0aXRsZSIsInJlc3VsdCIsIndpbmRvdyIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwibGluZXNUb0RlbGV0ZSIsInNwbGl0Iiwiam9pbiIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJmb3JFYWNoIiwiYnV0dG9uIiwiZm91bmQiLCJmaW5kIiwiZWxlbWVudCIsInB1c2giLCJyaWNoVGV4dCIsImdldEVsZW1lbnRCeUlkIiwiJHNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJpZCIsImRlZmVyIiwiYXN5bmMiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJlZGl0b3IiLCJkZWZhdWx0UGFyYWdyYXBoU2VwYXJhdG9yIiwic3R5bGVXaXRoQ1NTIiwiYWN0aW9ucyIsImdldEJ1dHRvbnMiLCJvbkNoYW5nZSIsImh0bWwiLCJ0ZXh0Q29udGVudCIsImNsYXNzZXMiLCJhY3Rpb25iYXIiLCJjb250ZW50Iiwic2VsZWN0ZWQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/fields/rich-text.js\n");

/***/ }),

/***/ "../../../../node_modules/pell/dist/pell.min.js":
/*!******************************************************!*\
  !*** ../../../../node_modules/pell/dist/pell.min.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("!function(t,e){ true?e(exports):0}(this,function(t){\"use strict\";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=\"defaultParagraphSeparator\",l=\"formatBlock\",a=function(t,e,n){return t.addEventListener(e,n)},s=function(t,e){return t.appendChild(e)},d=function(t){return document.createElement(t)},n=function(t){return document.queryCommandState(t)},f=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return document.execCommand(t,!1,e)},p={bold:{icon:\"<b>B</b>\",title:\"Bold\",state:function(){return n(\"bold\")},result:function(){return f(\"bold\")}},italic:{icon:\"<i>I</i>\",title:\"Italic\",state:function(){return n(\"italic\")},result:function(){return f(\"italic\")}},underline:{icon:\"<u>U</u>\",title:\"Underline\",state:function(){return n(\"underline\")},result:function(){return f(\"underline\")}},strikethrough:{icon:\"<strike>S</strike>\",title:\"Strike-through\",state:function(){return n(\"strikeThrough\")},result:function(){return f(\"strikeThrough\")}},heading1:{icon:\"<b>H<sub>1</sub></b>\",title:\"Heading 1\",result:function(){return f(l,\"<h1>\")}},heading2:{icon:\"<b>H<sub>2</sub></b>\",title:\"Heading 2\",result:function(){return f(l,\"<h2>\")}},paragraph:{icon:\"&#182;\",title:\"Paragraph\",result:function(){return f(l,\"<p>\")}},quote:{icon:\"&#8220; &#8221;\",title:\"Quote\",result:function(){return f(l,\"<blockquote>\")}},olist:{icon:\"&#35;\",title:\"Ordered List\",result:function(){return f(\"insertOrderedList\")}},ulist:{icon:\"&#8226;\",title:\"Unordered List\",result:function(){return f(\"insertUnorderedList\")}},code:{icon:\"&lt;/&gt;\",title:\"Code\",result:function(){return f(l,\"<pre>\")}},line:{icon:\"&#8213;\",title:\"Horizontal Line\",result:function(){return f(\"insertHorizontalRule\")}},link:{icon:\"&#128279;\",title:\"Link\",result:function(){var t=window.prompt(\"Enter the link URL\");t&&f(\"createLink\",t)}},image:{icon:\"&#128247;\",title:\"Image\",result:function(){var t=window.prompt(\"Enter the image URL\");t&&f(\"insertImage\",t)}}},m={actionbar:\"pell-actionbar\",button:\"pell-button\",content:\"pell-content\",selected:\"pell-button-selected\"},r=function(n){var t=n.actions?n.actions.map(function(t){return\"string\"==typeof t?p[t]:p[t.name]?e({},p[t.name],t):t}):Object.keys(p).map(function(t){return p[t]}),r=e({},m,n.classes),i=n[c]||\"div\",o=d(\"div\");o.className=r.actionbar,s(n.element,o);var u=n.element.content=d(\"div\");return u.contentEditable=!0,u.className=r.content,u.oninput=function(t){var e=t.target.firstChild;e&&3===e.nodeType?f(l,\"<\"+i+\">\"):\"<br>\"===u.innerHTML&&(u.innerHTML=\"\"),n.onChange(u.innerHTML)},u.onkeydown=function(t){var e;\"Enter\"===t.key&&\"blockquote\"===(e=l,document.queryCommandValue(e))&&setTimeout(function(){return f(l,\"<\"+i+\">\")},0)},s(n.element,u),t.forEach(function(t){var e=d(\"button\");if(e.className=r.button,e.innerHTML=t.icon,e.title=t.title,e.setAttribute(\"type\",\"button\"),e.onclick=function(){return t.result()&&u.focus()},t.state){var n=function(){return e.classList[t.state()?\"add\":\"remove\"](r.selected)};a(u,\"keyup\",n),a(u,\"mouseup\",n),a(e,\"click\",n)}s(o,e)}),n.styleWithCSS&&f(\"styleWithCSS\"),f(c,i),n.element},i={exec:f,init:r};t.exec=f,t.init=r,t.default=i,Object.defineProperty(t,\"__esModule\",{value:!0})});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BlbGwvZGlzdC9wZWxsLm1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLEtBQW9ELFlBQVksQ0FBd0UsQ0FBQyxrQkFBa0IsYUFBYSxpQ0FBaUMsWUFBWSxtQkFBbUIsS0FBSyxtQkFBbUIsc0VBQXNFLFNBQVMsaUVBQWlFLCtCQUErQixpQkFBaUIsd0JBQXdCLGVBQWUsaUNBQWlDLGVBQWUscUNBQXFDLGVBQWUsa0VBQWtFLG9DQUFvQyxJQUFJLE1BQU0sOENBQThDLGlCQUFpQixtQkFBbUIsa0JBQWtCLFNBQVMsZ0RBQWdELG1CQUFtQixtQkFBbUIsb0JBQW9CLFlBQVksbURBQW1ELHNCQUFzQixtQkFBbUIsdUJBQXVCLGdCQUFnQixrRUFBa0UsMEJBQTBCLG1CQUFtQiwyQkFBMkIsV0FBVyxnRUFBZ0Usb0JBQW9CLFdBQVcsZ0VBQWdFLG9CQUFvQixZQUFZLFlBQVksc0NBQXNDLG1CQUFtQixRQUFRLGNBQWMsT0FBTyxrQ0FBa0MsNEJBQTRCLFFBQVEsV0FBVyx5Q0FBeUMsK0JBQStCLFFBQVEsYUFBYSwyQ0FBMkMsaUNBQWlDLE9BQU8sVUFBVSxLQUFLLGlDQUFpQyxxQkFBcUIsT0FBTyxhQUFhLDRDQUE0QyxrQ0FBa0MsT0FBTyxlQUFlLGlDQUFpQywwQ0FBMEMsc0JBQXNCLFFBQVEsZUFBZSxrQ0FBa0MsMkNBQTJDLHdCQUF3QixJQUFJLHVHQUF1RyxlQUFlLDBDQUEwQyw0Q0FBNEMsZ0JBQWdCLGlDQUFpQyxZQUFZLFFBQVEsdUNBQXVDLHVDQUF1QyxpQ0FBaUMsd0VBQXdFLDBCQUEwQixnR0FBZ0cseUJBQXlCLE1BQU0sMkZBQTJGLHNCQUFzQixJQUFJLHNDQUFzQyxrQkFBa0IsZ0hBQWdILDZCQUE2QixVQUFVLGlCQUFpQiwwREFBMEQsK0NBQStDLE9BQU8scURBQXFELElBQUksZUFBZSxvRUFBb0UsU0FBUyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wZWxsL2Rpc3QvcGVsbC5taW4uanM/ZmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9lKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxlKTplKHQucGVsbD17fSl9KHRoaXMsZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl7dmFyIG49YXJndW1lbnRzW2VdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYodFtyXT1uW3JdKX1yZXR1cm4gdH0sYz1cImRlZmF1bHRQYXJhZ3JhcGhTZXBhcmF0b3JcIixsPVwiZm9ybWF0QmxvY2tcIixhPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKGUsbil9LHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5hcHBlbmRDaGlsZChlKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KX0sbj1mdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQucXVlcnlDb21tYW5kU3RhdGUodCl9LGY9ZnVuY3Rpb24odCl7dmFyIGU9MTxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGw7cmV0dXJuIGRvY3VtZW50LmV4ZWNDb21tYW5kKHQsITEsZSl9LHA9e2JvbGQ6e2ljb246XCI8Yj5CPC9iPlwiLHRpdGxlOlwiQm9sZFwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJib2xkXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImJvbGRcIil9fSxpdGFsaWM6e2ljb246XCI8aT5JPC9pPlwiLHRpdGxlOlwiSXRhbGljXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcIml0YWxpY1wiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpdGFsaWNcIil9fSx1bmRlcmxpbmU6e2ljb246XCI8dT5VPC91PlwiLHRpdGxlOlwiVW5kZXJsaW5lXCIsc3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gbihcInVuZGVybGluZVwiKX0scmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJ1bmRlcmxpbmVcIil9fSxzdHJpa2V0aHJvdWdoOntpY29uOlwiPHN0cmlrZT5TPC9zdHJpa2U+XCIsdGl0bGU6XCJTdHJpa2UtdGhyb3VnaFwiLHN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIG4oXCJzdHJpa2VUaHJvdWdoXCIpfSxyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcInN0cmlrZVRocm91Z2hcIil9fSxoZWFkaW5nMTp7aWNvbjpcIjxiPkg8c3ViPjE8L3N1Yj48L2I+XCIsdGl0bGU6XCJIZWFkaW5nIDFcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPGgxPlwiKX19LGhlYWRpbmcyOntpY29uOlwiPGI+SDxzdWI+Mjwvc3ViPjwvYj5cIix0aXRsZTpcIkhlYWRpbmcgMlwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8aDI+XCIpfX0scGFyYWdyYXBoOntpY29uOlwiJiMxODI7XCIsdGl0bGU6XCJQYXJhZ3JhcGhcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihsLFwiPHA+XCIpfX0scXVvdGU6e2ljb246XCImIzgyMjA7ICYjODIyMTtcIix0aXRsZTpcIlF1b3RlXCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxibG9ja3F1b3RlPlwiKX19LG9saXN0OntpY29uOlwiJiMzNTtcIix0aXRsZTpcIk9yZGVyZWQgTGlzdFwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKFwiaW5zZXJ0T3JkZXJlZExpc3RcIil9fSx1bGlzdDp7aWNvbjpcIiYjODIyNjtcIix0aXRsZTpcIlVub3JkZXJlZCBMaXN0XCIscmVzdWx0OmZ1bmN0aW9uKCl7cmV0dXJuIGYoXCJpbnNlcnRVbm9yZGVyZWRMaXN0XCIpfX0sY29kZTp7aWNvbjpcIiZsdDsvJmd0O1wiLHRpdGxlOlwiQ29kZVwiLHJlc3VsdDpmdW5jdGlvbigpe3JldHVybiBmKGwsXCI8cHJlPlwiKX19LGxpbmU6e2ljb246XCImIzgyMTM7XCIsdGl0bGU6XCJIb3Jpem9udGFsIExpbmVcIixyZXN1bHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZihcImluc2VydEhvcml6b250YWxSdWxlXCIpfX0sbGluazp7aWNvbjpcIiYjMTI4Mjc5O1wiLHRpdGxlOlwiTGlua1wiLHJlc3VsdDpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgbGluayBVUkxcIik7dCYmZihcImNyZWF0ZUxpbmtcIix0KX19LGltYWdlOntpY29uOlwiJiMxMjgyNDc7XCIsdGl0bGU6XCJJbWFnZVwiLHJlc3VsdDpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgaW1hZ2UgVVJMXCIpO3QmJmYoXCJpbnNlcnRJbWFnZVwiLHQpfX19LG09e2FjdGlvbmJhcjpcInBlbGwtYWN0aW9uYmFyXCIsYnV0dG9uOlwicGVsbC1idXR0b25cIixjb250ZW50OlwicGVsbC1jb250ZW50XCIsc2VsZWN0ZWQ6XCJwZWxsLWJ1dHRvbi1zZWxlY3RlZFwifSxyPWZ1bmN0aW9uKG4pe3ZhciB0PW4uYWN0aW9ucz9uLmFjdGlvbnMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0P3BbdF06cFt0Lm5hbWVdP2Uoe30scFt0Lm5hbWVdLHQpOnR9KTpPYmplY3Qua2V5cyhwKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHBbdF19KSxyPWUoe30sbSxuLmNsYXNzZXMpLGk9bltjXXx8XCJkaXZcIixvPWQoXCJkaXZcIik7by5jbGFzc05hbWU9ci5hY3Rpb25iYXIscyhuLmVsZW1lbnQsbyk7dmFyIHU9bi5lbGVtZW50LmNvbnRlbnQ9ZChcImRpdlwiKTtyZXR1cm4gdS5jb250ZW50RWRpdGFibGU9ITAsdS5jbGFzc05hbWU9ci5jb250ZW50LHUub25pbnB1dD1mdW5jdGlvbih0KXt2YXIgZT10LnRhcmdldC5maXJzdENoaWxkO2UmJjM9PT1lLm5vZGVUeXBlP2YobCxcIjxcIitpK1wiPlwiKTpcIjxicj5cIj09PXUuaW5uZXJIVE1MJiYodS5pbm5lckhUTUw9XCJcIiksbi5vbkNoYW5nZSh1LmlubmVySFRNTCl9LHUub25rZXlkb3duPWZ1bmN0aW9uKHQpe3ZhciBlO1wiRW50ZXJcIj09PXQua2V5JiZcImJsb2NrcXVvdGVcIj09PShlPWwsZG9jdW1lbnQucXVlcnlDb21tYW5kVmFsdWUoZSkpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGYobCxcIjxcIitpK1wiPlwiKX0sMCl9LHMobi5lbGVtZW50LHUpLHQuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1kKFwiYnV0dG9uXCIpO2lmKGUuY2xhc3NOYW1lPXIuYnV0dG9uLGUuaW5uZXJIVE1MPXQuaWNvbixlLnRpdGxlPXQudGl0bGUsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksZS5vbmNsaWNrPWZ1bmN0aW9uKCl7cmV0dXJuIHQucmVzdWx0KCkmJnUuZm9jdXMoKX0sdC5zdGF0ZSl7dmFyIG49ZnVuY3Rpb24oKXtyZXR1cm4gZS5jbGFzc0xpc3RbdC5zdGF0ZSgpP1wiYWRkXCI6XCJyZW1vdmVcIl0oci5zZWxlY3RlZCl9O2EodSxcImtleXVwXCIsbiksYSh1LFwibW91c2V1cFwiLG4pLGEoZSxcImNsaWNrXCIsbil9cyhvLGUpfSksbi5zdHlsZVdpdGhDU1MmJmYoXCJzdHlsZVdpdGhDU1NcIiksZihjLGkpLG4uZWxlbWVudH0saT17ZXhlYzpmLGluaXQ6cn07dC5leGVjPWYsdC5pbml0PXIsdC5kZWZhdWx0PWksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../node_modules/pell/dist/pell.min.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/fields/rich-text.js");
/******/ 	
/******/ })()
;