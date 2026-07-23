commands = {
    data: {
        name: "html",
        description: "Learn to build websites!",
        options: [
            {
                name: "type",
                description: "What part of HTML would you like to learn?",
                type: 3,
                required: true,
                choices: [
                    {
                        name: "setup",
                        value: "setup"
                    },
                    {
                        name: "paragraph",
                        value: "paragraph"
                    },
                    {
                        name: "header",
                        value: "header"
                    }
                ]
            }
        ]
    },
    code: `
        $if[$option[type]==setup;
        $codeBlock[
<html>
<head>
    <!-- INSERT STUFF HERE -->
</head>
<body>
    <!-- INSERT STUFF HERE -->
</body>
</html>
;html]
        $callFunction[getGlobals;html]
        ]
        $if[$option[type]==paragraph;
        $codeBlock[
<!-- INSIDE BODY TAGS -->
<p> Hello World </p>
Hello World
;html]
        $callFunction[getGlobals;html]
        ]
        $if[$option[type]==header;
        $codeBlock[
<!-- INSIDE BODY TAGS -->
<h1> Hello World! </h1>
<h2> Hello World! </h2>
<h3> Hello World! </h3>
<h4> Hello World! </h4>
<h5> Hello World! </h5>
<h6> Hello World! </h6>
;html]
        $callFunction[getGlobals;html]
        ]
    `,
};

module.exports = commands;
