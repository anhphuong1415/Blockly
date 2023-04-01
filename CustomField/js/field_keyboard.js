'use strict'

goog.provide('CustomFields.FieldKeyboard');

goog.require('Blockly.Field');
goog.require('Blockly.fieldRegistry');
goog.require('Blockly.utils');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.object');
goog.require('Blockly.utils.Size');

var CustomFields = CustomFields || {};

CustomFields.FieldKeyboard = function(
    pressKey,
    opt_validator
) {
    this.keys_ = [null, null, null, null];
    var value = {};
    
    value.pressKey = pressKey || 0;
    CustomFields.FieldKeyboard.superClass_.constructor.call(this,
        value,
        opt_validator
    );
    this.isDirty_ = true;
};
Blockly.utils.object.inherits(CustomFields.FieldKeyboard, Blockly.Field);

CustomFields.FieldKeyboard.fromJson = function (options) {
    return new CustomFields.FieldKeyboard(
            options['pressKey'],
    );
};

CustomFields.FieldKeyboard.prototype.CURSOR = 'pointer';
CustomFields.FieldKeyboard.prototype.SERIALIZABLE = true;
CustomFields.FieldKeyboard.prototype.editorListeners_ = [];

CustomFields.FieldKeyboard.prototype.initView = function () {
  CustomFields.FieldKeyboard.superClass_.initView.call(this);
  this.createView_();
};

CustomFields.FieldKeyboard.prototype.doClassValidation_ = function (newValue) {
    if (newValue.pressKey == undefined 
        || newValue.pressKey < 1
        || newValue.pressKey > 4) {
      newValue.pressKey = 0;
    }
    return newValue;
};

CustomFields.FieldKeyboard.prototype.showEditor_ = function() {
    this.editor_ = this.createWidgetView();
    this.styleDiv();
    Blockly.WidgetDiv.DIV.appendChild(this.editor_);
    this.renderEditor_();
    Blockly.WidgetDiv.show(
        this,
        this.sourceBlock_.LTR,
        this.widgetDispose_.bind(this),
    );
}

CustomFields.FieldKeyboard.prototype.styleDiv = function () {
    Blockly.WidgetDiv.DIV.style.width = '23em';
    Blockly.WidgetDiv.DIV.style.height = '24em';
    Blockly.WidgetDiv.DIV.style.left = 'calc(50% - 11.5em)';
    Blockly.WidgetDiv.DIV.style.top = 'calc(50% - 12em)';
    Blockly.WidgetDiv.DIV.style.backgroundColor = '#030303dc';
    Blockly.WidgetDiv.DIV.style.borderRadius = '2%';
    Blockly.WidgetDiv.DIV.style.border = 'solid';
    Blockly.WidgetDiv.DIV.style.borderWidth = '1px';
    Blockly.WidgetDiv.DIV.style.color = '#a8d8f8';
    Blockly.WidgetDiv.DIV.style.boxShadow = '0 0 0.4em 0 #79c3f4';
    Blockly.WidgetDiv.DIV.style.textAlign = 'center';
};

CustomFields.FieldKeyboard.prototype.createWidgetView = function () {
    var editorDiv = document.createElement('div');
    editorDiv.textContent = "KEY BOARD";

    var keyboardModule = document.createElement('div');
    keyboardModule.id = 'keyboard';

    for(var i = 1; i < 5; ++i)
    {
        var Key_ = document.createElement('div');
        Key_.className = 'Key';
        Key_.id = 'Key' + i;
        Key_.textContent = i;
        keyboardModule.appendChild(Key_);
        this.editorListeners_.push(
            Blockly.bindEvent_(Key_, this.getMouseUp(), this, this.onKeyClick),
        );
    }

    editorDiv.appendChild(keyboardModule);
    return editorDiv;
};

CustomFields.FieldKeyboard.prototype.onKeyClick = function (event) {
    var pressKey = [
        this.value_.pressKey,
    ]
    
    var curKey = event.currentTarget ;
    var curKeyId = parseInt(curKey.id[3]);
    if(pressKey == curKeyId)
    {
        curKey.style.backgroundColor = "#030303dc";
        pressKey = 0;
    }
    else
    {
        curKey.style.backgroundColor = '#a8d8f8';
        if(pressKey != 0)
          document.getElementById('Key' + pressKey.toString()).style.backgroundColor = "#030303dc";
        pressKey = curKeyId;
    }

    this.isDirty_ = true;
    var value = {};
    value.pressKey = pressKey;

    this.setValue(value);
};

CustomFields.FieldKeyboard.prototype.updateSize_ = function () {
    var bbox = this.matrixGroup_.getBBox();
    var width = bbox.width;
    var height = bbox.height;
    if (this.borderRect_) {
      this.borderRect_.setAttribute('width', width);
      this.borderRect_.setAttribute('height', height);
    }
    // Note how both the width and the height can be dynamic.
    this.size_.width = width;
    this.size_.height = height;
};

CustomFields.FieldKeyboard.prototype.render_ = function () {
    var pressKey = [
        this.value_.pressKey,
    ]

    for (var i = 0; i < 4; i++) {
      if((i + 1) == pressKey)
      {
        this.keys_[i].style.fill = 'green';
      }
      else
      {
        this.keys_[i].style.fill = "#000";
      }
    }
    this.updateSize_();
};

CustomFields.FieldKeyboard.prototype.renderEditor_ = function () {
    var pressKey = [
        this.value_.pressKey,
    ]
    
    for (var i = 1; i < 5; i++) {
        if(i == pressKey)
        {
          document.getElementById("Key" + i).style.backgroundColor 
            = '#a8d8f8';
        }
        else
        {
            document.getElementById("Key" + i).style.backgroundColor = "#030303dc";
        }
    }
};

CustomFields.FieldKeyboard.prototype.widgetDispose_ = function () {
    for (
      var i = this.editorListeners_.length, listener;
      (listener = this.editorListeners_[i]);
      i--
    ) {
      Blockly.unbindEvent_(listener);
      this.editorListeners_.pop();
    }
};

CustomFields.FieldKeyboard.prototype.createView_ = function () {
    this.matrixGroup_ = Blockly.utils.dom.createSvgElement(
        'g',
        {
        transform: 'translate(0, 0)',
        },
        this.fieldGroup_,
    );
    for (var i = 0; i < 4; i++) {
        this.keys_[i]= Blockly.utils.dom.createSvgElement(
            'rect',
            {
                class: 'cellSvg',
                x: (i % 2) * 40 + (i % 2) * 2,
                y: (i > 1) * 40 + (i > 1) * 2,
                width: 40,
                height: 40,
                rx: 10,
                ry: 10,
                fill: '#000',
                stoke: "#fff",
                opacity: 0.5,
            },
            this.matrixGroup_,
        );
    }
};

CustomFields.FieldKeyboard.prototype.toXml = function (fieldElement) {
    fieldElement.setAttribute('pressKey', this.value_.pressKey);
    // Always return the element!
    return fieldElement;
};

CustomFields.FieldKeyboard.prototype.fromXml = function (fieldElement) {
    // Because we had to do custom serialization for this field, we also need
    // to do custom de-serialization.
  
    var value = {};
    value.pressKey = fieldElement.getAttribute('pressKey');
  
    // The end goal is to call this.setValue()
    this.setValue(value);
};

CustomFields.FieldKeyboard.prototype.detectMobile = function () {
    var result = navigator.userAgent.match(
      /(iphone)|(ipod)|(ipad)|(android)|(blackberry)|(windows phone)|(symbian)/i,
    );
  
    if (result !== null) {
      return 'mobile';
    } else {
      return 'desktop';
    }
  };
  
  CustomFields.FieldKeyboard.prototype.getMouseDown = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mousedown';
    } else {
      return 'touchstart';
    }
  };
  
  CustomFields.FieldKeyboard.prototype.getMouseUp = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mouseup';
    } else {
      return 'touchend';
    }
  };
  
  CustomFields.FieldKeyboard.prototype.getMouseMove = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mousemove';
    } else {
      return 'touchmove';
    }
  };
  
  // add to tree
  Blockly.fieldRegistry.register('field_keyboard', CustomFields.FieldKeyboard);

