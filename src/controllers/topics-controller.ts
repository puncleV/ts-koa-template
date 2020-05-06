import {ITopic} from "./types";

export class TopicsController {
  getAll(): ITopic[] {
    return Array(5)
      .fill("")
      .map((t, i) => ({
        id: String(i),
        title: `TiTlE ${i} Lorem ipsum dolor `,
        published: Date.now(),
        tags: new Array(~~(Math.random() * 5)).fill("").map((o, i) => ({
          name: `tag ${i}`,
        })),
        preview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae condimentum erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tempor, erat mollis tincidunt tempus, leo nisl posuere massa, non porta quam velit ac ante. Proin nec orci risus. Vivamus luctus lacinia ligula. Cras in pretium libero, sollicitudin mattis nisl. Aenean sodales tristique ex quis tempor. Nam blandit ante ut dui fringilla malesuada. Nulla at bibendum sem. Morbi congue nec justo sit amet viverra. Quisque vestibulum dictum ipsum eu pulvinar.\n" +
          "\n" +
          "Vestibulum mollis enim eget metus posuere, ac tristique arcu scelerisque. Donec viverra imperdiet diam, sit amet tincidunt nisi porttitor id. Cras pretium tortor et convallis porttitor. Maecenas congue interdum tempus. Phasellus nec tortor tincidunt, placerat purus ut, posuere velit. In sollicitudin ipsum vitae nisi rhoncus congue. Vivamus pretium nunc eu dolor laoreet, a placerat dui ullamcorper. Vestibulum ut venenatis ipsum. Aliquam erat volutpat. Quisque ac massa sed lacus vestibulum sagittis. Pellentesque rutrum aliquet nisl a rutrum. Mauris iaculis, turpis vel scelerisque egestas, elit orci varius nisl, eget sollicitudin nibh velit id justo. Donec euismod, diam fringilla consectetur imperdiet, est tellus faucibus neque, tempus eleifend sem lorem et leo. Morbi pretium sem quis porttitor vestibulum.\n" +
          "\n",
      }));
  }

  getOne(id: string) {
    return {
      text:
        "# h1 Heading 8-)\n" +
        "<h2> h2 Heading by HTML</h2>\n" +
        "## h2 Heading\n" +
        "### h3 Heading\n" +
        "\n" +
        "## Horizontal Rules\n" +
        "\n" +
        "___\n" +
        "\n" +
        "---\n" +
        "\n" +
        "***\n" +
        "\n" +
        "## Typographic replacements\n" +
        "\n" +
        "Enable typographer option to see result.\n" +
        "\n" +
        "(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n" +
        "\n" +
        "test.. test... test..... test?..... test!....\n" +
        "\n" +
        "!!!!!! ???? ,,  -- ---\n" +
        "\n" +
        "\"Smartypants, double quotes\" and 'single quotes'\n" +
        "\n" +
        "\n" +
        "## Emphasis\n" +
        "\n" +
        "**This is bold text**\n" +
        "\n" +
        "__This is bold text__\n" +
        "\n" +
        "*This is italic text*\n" +
        "\n" +
        "_This is italic text_\n" +
        "\n" +
        "~~Strikethrough~~\n" +
        "\n" +
        "\n" +
        "## Blockquotes\n" +
        "\n" +
        "\n" +
        "> Blockquotes can also be nested...\n" +
        ">> ...by using additional greater-than signs right next to each other...\n" +
        "> > > ...or with spaces between arrows.\n" +
        "\n" +
        "\n" +
        "## Lists\n" +
        "\n" +
        "Unordered\n" +
        "\n" +
        "+ Create a list by starting a line with `+`, `-`, or `*`\n" +
        "+ Sub-lists are made by indenting 2 spaces:\n" +
        "  - Marker character change forces new list start:\n" +
        "    * Ac tristique libero volutpat at\n" +
        "    + Facilisis in pretium nisl aliquet\n" +
        "    - Nulla volutpat aliquam velit\n" +
        "+ Very easy!\n" +
        "\n" +
        "Ordered\n" +
        "\n" +
        "1. Lorem ipsum dolor sit amet\n" +
        "2. Consectetur adipiscing elit\n" +
        "3. Integer molestie lorem at massa\n" +
        "\n" +
        "\n" +
        "1. You can use sequential numbers...\n" +
        "1. ...or keep all the numbers as `1.`\n" +
        "\n" +
        "Start numbering with offset:\n" +
        "\n" +
        "57. foo\n" +
        "1. bar\n" +
        "\n" +
        "\n" +
        "## Code\n" +
        "\n" +
        "Inline `code`\n" +
        "\n" +
        "Indented code\n" +
        "\n" +
        "    // Some comments\n" +
        "    line 1 of code\n" +
        "    line 2 of code\n" +
        "    line 3 of code\n" +
        "\n" +
        "\n" +
        'Block code "fences"\n' +
        "\n" +
        "```\n" +
        "Sample text here...\n" +
        "```\n" +
        "Syntax highlighting\n" +
        "\n" +
        "``` javascript\n" +
        "var foo = function (bar) {\n" +
        "  return bar++;\n" +
        "};\n" +
        "\n" +
        "console.log(foo(5));\n" +
        "```\n" +
        "\n" +
        "``` go\n" +
        "package main\n" +
        "\n" +
        'import "fmt"\n' +
        "\n" +
        "func main() {\n" +
        '\tfmt.Println("Hello, world!")\n' +
        "}\n" +
        "```\n" +
        "\n" +
        "## Tables\n" +
        "\n" +
        "| Option | Description |\n" +
        "| ------ | ----------- |\n" +
        "| data   | path to data files to supply the data that will be passed into templates. |\n" +
        "| engine | engine to be used for processing templates. Handlebars is the default. |\n" +
        "| ext    | extension to be used for dest files. |\n" +
        "\n" +
        "Right aligned columns\n" +
        "\n" +
        "| Option | Description |\n" +
        "| ------:| -----------:|\n" +
        "| data   | path to data files to supply the data that will be passed into templates. |\n" +
        "| engine | engine to be used for processing templates. Handlebars is the default. |\n" +
        "| ext    | extension to be used for dest files. |\n" +
        "\n" +
        "## Links\n" +
        "\n" +
        "[vue-markdown](https://github.com/miaolz123/vue-markdown)\n" +
        "\n" +
        '[link with title](https://github.com/miaolz123/vue-markdown "VueMarkdown")\n' +
        "\n" +
        "Autoconverted link https://github.com/miaolz123/vue-markdown (enable linkify to see)\n" +
        "\n" +
        "\n" +
        "## Images\n" +
        "\n" +
        "![Minion](dist/img/minion.png)\n" +
        "\n" +
        "Like links, Images also have a footnote style syntax\n" +
        "\n" +
        "![Alt text][id]\n" +
        "\n" +
        "With a reference later in the document defining the URL location:\n" +
        "\n" +
        '[id]: dist/img/minion.png  "The Dojocat"\n' +
        "\n" +
        "\n" +
        "### Emojies\n" +
        "\n" +
        "> Classic markup: :wink: :cry: :laughing: :yum:\n" +
        ">\n" +
        "> Shortcuts (emoticons): :-) :-( 8-) ;)\n" +
        "\n" +
        "\n" +
        "### Subscript / Superscript\n" +
        "\n" +
        "- 19^th^\n" +
        "- H~2~O\n" +
        "\n" +
        "\n" +
        "### \\<ins>\n" +
        "\n" +
        "++Inserted text++\n" +
        "\n" +
        "\n" +
        "### \\<mark>\n" +
        "\n" +
        "==Marked text==\n" +
        "\n" +
        "\n" +
        "### Footnotes\n" +
        "\n" +
        "Footnote 1 link[^first].\n" +
        "\n" +
        "Footnote 2 link[^second].\n" +
        "\n" +
        "Inline footnote^[Text of inline footnote] definition.\n" +
        "\n" +
        "Duplicated footnote reference[^second].\n" +
        "\n" +
        "[^first]: Footnote **can have markup**\n" +
        "\n" +
        "    and multiple paragraphs.\n" +
        "\n" +
        "[^second]: Footnote text.\n" +
        "\n" +
        "\n" +
        "### Definition lists\n" +
        "\n" +
        "Term 1\n" +
        "\n" +
        ":   Definition 1\n" +
        "with lazy continuation.\n" +
        "\n" +
        "Term 2 with *inline markup*\n" +
        "\n" +
        ":   Definition 2\n" +
        "\n" +
        "        { some code, part of Definition 2 }\n" +
        "\n" +
        "    Third paragraph of definition 2.\n" +
        "\n" +
        "_Compact style:_\n" +
        "\n" +
        "Term 1\n" +
        "  ~ Definition 1\n" +
        "\n" +
        "Term 2\n" +
        "  ~ Definition 2a\n" +
        "  ~ Definition 2b\n" +
        "\n" +
        "\n" +
        "### Abbreviations\n" +
        "\n" +
        "This is HTML abbreviation example.\n" +
        "\n" +
        'It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.\n' +
        "\n" +
        "*[HTML]: Hyper Text Markup Language",
      time: Date.now(),
      title: "Title",
      id,
    };
  }
}
