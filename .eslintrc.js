module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: [
                    "tsconfig.json",
                ],
                createDefaultProgram: true
            },
            extends: ["plugin:@angular-eslint/recommended",
                "plugin:prettier/recommended", // TO-DO глянуть
            ],
            rules: {
               }
        },
        {
            files: ["*.component.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                "max-len": ["error", { "code": 140 }]
            }
        }
    ]
};