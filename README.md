Protractor Demo Project
=======================

This project provides an example of the operations and standards used to create an automated tests in [Protractor](https://github.com/angular/protractor).

Gettings Started
----------------
Installing:
```bash
npm install
bower install
```

Running:
```bash
# start app server
grunt server
# run karma unit tests
grunt test:unit
# Start Selenium Server
java -jar selenium/selenium-server-standalone-2.35.0.jar -Dwebdriver.chrome.driver=./selenium/chromedriver-osx
# Start protractor (Manual)
node_modules/.bin/protractor protractor.conf.js
```


Protractor Docs
===============
Locators
--------
- protractor.By.className('btn')
- protractor.By.css('.btn')
- protractor.By.id('btn')
- protractor.By.linkText('Go Home')
- protractor.By.partialLinkText('Home')
- protractor.By.name('email')
- protractor.By.tagName('h2')
- protractor.By.xpath('\html')

Angular Locators
----------------
- protractor.By.binding('{{model}}')
- protractor.By.select('user')
- protractor.By.selectOption('red')
- protractor.By.input('user')
- protractor.By.repeater('cats in pets')
- protractor.By.repeater('cats in pets').row(1).column('{{cat.name}}')

WebElement Methods
------------------
- clear() - If this element is a text entry element, this will clear the value
- click() - Click this element
- getAttribute(name) - Get the value of a given attribute of the element
- getCssValue(propertyName) - Get the value of a given css property
- getLocation() - Where on the page is the top left-had norner of the rendered element
- getSize() - What is the width and height of the rendered element
- getTagName() - Get the tag name of this element
- getText() - Get the visiable innerText of this element
- isDisplayed() - Is the element displayed or not
- isEnabled() - Is the element currently enabled or not
- isSelected() - Determine whether or not this element is selected or not
- sendKeys(keysToSend) - Use this method to simulate typing into an element, which may set its value

Protractor API
--------------
- ptor.get()
- ptor.getCurrentUrl()
- ptor.findElement(protractor.By.binding('{{model}}')).getText()
- ptor.findElement(protractor.By.input('model')).sendKeys(value)
- ptor.findElement(protractor.By.input('model')).click()
- ptor.findElement(protractor.By.input('model')).getText()
- ptor.findElements(protractor.By.repeater('cat in pets')).length()
- ptor.findElements(protractor.By.repeater('cat in pets')).row(index)
- ptor.findElements(protractor.By.repeater('cat in pets')).row(index).column(binding)
- ptor.findElement(protractor.By.id('selectId')).click()
- ptor.findElement(protractor.By.css('option [value=0]')).click()
- ptor.findElement(protractor.By.id('selectId')).click()
- ptor.findElement(protractor.By.css('option [value=0]')).click()

Other
-----
- ptor.waitForAngular()
- ptor.addMockModule(name, script)
- ptor.clearMockModules()
