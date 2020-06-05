const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    prompting () {
        //yeoman 在询问用户环节会自动调节此方法
        //在此方法中可以调用父类的prompt()方法发出对用户的命令行询问
        return this.prompt([{
            type:'input',
            name:'name',
            message:'Your project name',
            default:this.appname //生成项目目录名称
        }])
        .then(answers=>{
            //answers=>{name:'user input value'}
            this.answers = answers
        })
    }
    writing(){
        //把每一个文件都通过模板转换到目标路径
        const templates = [
            '.gitignore',
            'babel.config.js',
            'package.json',
            'README.md',
            'public/favicon.ico',
            'public/index.html',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/App.vue',
            'src/main.js'
        ]
        templates.forEach(item=>{
            this.fs.copyTpl(this.templatePath(item),this.destinationPath(item),this.answers)
        })
    }
}