#!/usr/bin/python
# encoding: utf-8

from flask import Flask, render_template
from feedparser import feedparser

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    feed = [{"link":item.link, "title":item.title, "description":item.description, "content":item.content} for item in feedparser.parse("http://blog.ongseed.fr/index.php/feed/")['entries']][:3]
    context = {"feed" : feed}
    getImg = []
    for item in feed :
        #code de bourin pas jolie du tout :D 
        
        for sub_item in item['content'] :
            try :
                getImg.append("<img class=\"img-thumbnail img-responsive\" "+str(sub_item['value'].split("img")[1].split("/>")[0])+" />")
            except :
            	getImg.append("")
                continue
        #je confirme c'est vraiment sale :p
    print getImg
    return render_template('index.html', getImg=getImg , **context)
    # return render_template('index.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/expertises')
def presta():
    return render_template('expertises.html')

@app.route('/otromodo')
def otromodo():
    return render_template('otromodo.html')

if __name__ == '__main__':
    app.debug = False
    app.secret_key = '6UEqsPSLfdOAcLG'
    app.run()
