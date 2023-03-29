'use strict'

goog.provide('CustomFields.FieldTrafficLight');

goog.require('Blockly.Field');
goog.require('Blockly.fieldRegistry');
goog.require('Blockly.utils');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.object');
goog.require('Blockly.utils.Size');

var CustomFields = CustomFields || {};

CustomFields.FieldTrafficLight = function(
    greenLight,
    yellowLight,
    redLight,
    opt_validator
) {

    this.Lights_ = [null, null, null];
    var value = {};
    
    value.greenLight = greenLight || 'true';
    value.yellowLight = yellowLight || 'false';
    value.redLight = redLight || 'false';
    CustomFields.FieldTrafficLight.superClass_.constructor.call(this,
        value,
        opt_validator
    );
    this.isDirty_ = true;
};
Blockly.utils.object.inherits(CustomFields.FieldTrafficLight, Blockly.Field);

CustomFields.FieldTrafficLight.fromJson = function (options) {
    return new CustomFields.FieldTrafficLight(
            options['greenLight'],
            options['yellowLight'],
            options['redLight'],
    );
};

CustomFields.FieldTrafficLight.prototype.CURSOR = 'pointer';
CustomFields.FieldTrafficLight.prototype.SERIALIZABLE = true;
CustomFields.FieldTrafficLight.prototype.editorListeners_ = [];

CustomFields.FieldTrafficLight.prototype.initView = function () {
  CustomFields.FieldTrafficLight.superClass_.initView.call(this);
  this.createView_();
};

CustomFields.FieldTrafficLight.prototype.doClassValidation_ = function (newValue) {
    if (newValue.greenLight == undefined 
        || (newValue.greenLight != 'true'
        && newValue.greenLight != 'false')) {
      newValue.greenLight = 'true';
    }
    if (newValue.yellowLight == undefined 
        || (newValue.yellowLight != 'true'
        && newValue.yellowLight != 'false')) {
      newValue.yellowLight = 'true';
    }
    if (newValue.redLight == undefined 
        || (newValue.redLight != 'true'
        && newValue.redLight != 'false')) {
      newValue.redLight = 'true';
    }
    return newValue;
};

CustomFields.FieldTrafficLight.prototype.showEditor_ = function() {
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

CustomFields.FieldTrafficLight.prototype.styleDiv = function () {
    Blockly.WidgetDiv.DIV.style.width = '22em';
    Blockly.WidgetDiv.DIV.style.height = '16em';
    Blockly.WidgetDiv.DIV.style.position = 'absolute';
    Blockly.WidgetDiv.DIV.style.left = 'calc(50% - 11em)';
    Blockly.WidgetDiv.DIV.style.top = 'calc(50% + 8em)';
    Blockly.WidgetDiv.DIV.style.backgroundColor = '#030303dc';
    Blockly.WidgetDiv.DIV.style.borderRadius = '2%';
    Blockly.WidgetDiv.DIV.style.border = 'solid';
    Blockly.WidgetDiv.DIV.style.borderWidth = '1px';
    Blockly.WidgetDiv.DIV.style.color = '#a8d8f8';
    Blockly.WidgetDiv.DIV.style.boxShadow = '0 0 0.4em 0 #79c3f4';
    Blockly.WidgetDiv.DIV.style.textAlign = 'center';
    Blockly.WidgetDiv.DIV.style.display = 'block';
    Blockly.WidgetDiv.DIV.style.alignItems = 'center';
    Blockly.WidgetDiv.DIV.style.justifyContent = 'center';
};

CustomFields.FieldTrafficLight.prototype.createWidgetView = function () {
    var editorDiv = document.createElement('div');
    editorDiv.textContent = 'TRAFFIC LIGHTS';

    var lightsModule = document.createElement('div');
    lightsModule.id = 'trafficLights';

    for(var i = 0; i < 3; ++i)
    {
        var Light_ = document.createElement('div');
        Light_.className = 'Light';
        Light_.id = i;
        lightsModule.appendChild(Light_);
        this.editorListeners_.push(
            Blockly.bindEvent_(Light_, this.getMouseUp(), this, this.onLightClick),
        );
    }

    editorDiv.appendChild(lightsModule)
    return editorDiv;
};

CustomFields.FieldTrafficLight.BackgroundLight = ["green", "yellow", "red"]

CustomFields.FieldTrafficLight.prototype.onLightClick = function (event) {
    var LightsArray = [
        this.value_.greenLight,
        this.value_.yellowLight,
        this.value_.redLight,
      ]
    
    var curLight = event.currentTarget ;
    var curLightId = parseInt(curLight.id[0]);

    Array.from(document.getElementsByClassName('Light')).forEach(element => {
        var id = parseInt(element.id[0]);
        if(LightsArray[id] == 'false' && element.id == curLight.id)
        {
            element.style.backgroundColor = CustomFields.FieldTrafficLight.BackgroundLight[id];
            LightsArray[id] = 'true';
        }
        else
        {
            LightsArray[id] = 'false';
            element.style.backgroundColor = "#030303dc";
        }
    }); 

    this.isDirty_ = true;
    var value = {};
    value.greenLight = segmentArray[0];
    value.yellowLight = segmentArray[1];
    value.redLight = segmentArray[2];

    this.setValue(value);
  };

  CustomFields.FieldTrafficLight.prototype.updateSize_ = function () {
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

CustomFields.FieldTrafficLight.prototype.render_ = function () {
    var LightsArray = [
        this.value_.greenLight,
        this.value_.yellowLight,
        this.value_.redLight,
    ]
    for (let i = 0; i < 3; i++) {
      if(LightsArray[i] == 'true')
      {
        this.Lights_[i].style.fill = CustomFields.FieldTrafficLight.BackgroundLight[id];
      }
      else
      {
        this.Lights_[i].style.fill = "#030303dc"
      }
    }
    this.updateSize_();
};

CustomFields.FieldTrafficLight.prototype.renderEditor_ = function () {
    var LightsArray = [
        this.value_.greenLight,
        this.value_.yellowLight,
        this.value_.redLight,
    ]
    
    for (var i = 0; i < 3; ++i) {
        if(LightsArray[i] == 'true')
        {
            document.getElementById(id).style.backgroundColor = CustomFields.FieldTrafficLight.BackgroundLight[id];
        }
        else
        {
            document.getElementById(id).style.backgroundColor = "#030303dc";
        }
    }
};

CustomFields.FieldTrafficLight.prototype.widgetDispose_ = function () {
    for (
      var i = this.editorListeners_.length, listener;
      (listener = this.editorListeners_[i]);
      i--
    ) {
      Blockly.unbindEvent_(listener);
      this.editorListeners_.pop();
    }
  };

  CustomFields.FieldTrafficLight.prototype.createView_ = function () {
    this.matrixGroup_ = Blockly.utils.dom.createSvgElement(
      'g',
      {
        transform: 'translate(0, 0)',
      },
      this.fieldGroup_,
    );
    for (var i = 0; i < 3; i++) {
        var offset = 20 + i * 43;
        this.Lights_[i]= Blockly.utils.dom.createSvgElement(
            'circle',
            {
            class: 'cellSvg',
            cx: offset,
            cy: 20,
            r: 20,
            stoke: "#fff",
            fill: '#000',
            },
            this.matrixGroup_,
        );
    }
  };

  CustomFields.FieldTrafficLight.prototype.detectMobile = function () {
    var result = navigator.userAgent.match(
        /(iphone)|(ipod)|(ipad)|(android)|(blackberry)|(windows phone)|(symbian)/i,
    );

    if (result !== null) {
        return 'mobile';
    } else {
        return 'desktop';
    }
};

CustomFields.FieldTrafficLight.prototype.getMouseDown = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mousedown';
    } else {
      return 'touchstart';
    }
  };
  
  CustomFields.FieldTrafficLight.prototype.getMouseUp = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mouseup';
    } else {
      return 'touchend';
    }
  };
  
  CustomFields.FieldTrafficLight.prototype.getMouseMove = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mousemove';
    } else {
      return 'touchmove';
    }
  };

  CustomFields.FieldTrafficLight.prototype.toXml = function (fieldElement) {
    fieldElement.setAttribute('greenLight', this.value_.greenLight);
    fieldElement.setAttribute('yellowLight', this.value_.yellowLight);
    fieldElement.setAttribute('redLight', this.value_.redLight);
    // Always return the element!
    return fieldElement;
  };

  CustomFields.FieldTrafficLight.prototype.fromXml = function (fieldElement) {
    var value = {};
    value.greenLight = fieldElement.getAttribute('greenLight');
    value.yellowLight = fieldElement.getAttribute('yellowLight');
    value.redLight = fieldElement.getAttribute('redLight');
    this.setValue(value);
  };
  
  // add to tree
  Blockly.fieldRegistry.register('field_traficLight', CustomFields.FieldTrafficLight);