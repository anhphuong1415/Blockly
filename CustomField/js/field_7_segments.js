'use strict'

goog.provide('CustomFields.FieldLedSegments');

goog.require('Blockly.Field');
goog.require('Blockly.fieldRegistry');
goog.require('Blockly.utils');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.object');
goog.require('Blockly.utils.Size');

var CustomFields = CustomFields || {};

CustomFields.FieldSegmentLed = function(
    segment1,
    segment2,
    segment3,
    segment4,
    opt_validator
) {
    this.cellLed_ = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ];

    var value = {};
    
    value.segment1 = segment1 || 'true,true,true,true,true,true,true';
    value.segment2 = segment2 || 'true,true,true,true,true,true,true';
    value.segment3 = segment3 || 'true,true,true,true,true,true,true';
    value.segment4 = segment4 || 'true,true,true,true,true,true,true';
    CustomFields.FieldSegmentLed.superClass_.constructor.call(this,
        value,
        opt_validator
    );
    this.isDirty_ = true;
};
Blockly.CustomFields.object.inherits(CustomFields.FieldSegmentLed, Blockly.Field);

CustomFields.FieldSegmentLed.fromJson = function (options) {
    return new CustomFields.FieldSegmentLed(
            options['segment1'],
            options['segment2'],
            options['segment3'],
            options['segment4'],
    );
};

CustomFields.FieldSegmentLed.prototype.CURSOR = 'pointer';
CustomFields.FieldSegmentLed.prototype.SERIALIZABLE = true;

CustomFields.FieldSegmentLed.prototype.initView = function () {
  CustomFields.FieldSegmentLed.superClass_.initView.call(this);
  this.createView_();
};

CustomFields.FieldSegmentLed.prototype.doClassValidation_ = function (newValue) {
    if (newValue.segment1 == undefined 
        || newValue.segment1 > 127
        || newValue.segment1 < 0) {
      newValue.segment1 = 'true,true,true,true,true,true,true';
    }
    if (newValue.segment2 == undefined 
        || newValue.segment2 > 127
        || newValue.segment2 < 0) {
      newValue.segment2 = 'true,true,true,true,true,true,true';
    }
    if (newValue.segment3 == undefined 
        || newValue.segment3 > 127
        || newValue.segment3 < 0) {
      newValue.segment3 = 'true,true,true,true,true,true,true';
    }
    if (newValue.segment4 == undefined 
        || newValue.segment4 > 127
        || newValue.segment4 < 0) {
      newValue.segment4 = 'true,true,true,true,true,true,true';
    }
    
    return newValue;
};

CustomFields.FieldSegmentLed.prototype.initView = function () {
    CustomFields.FieldSegmentLed.superClass_.initView.call(this);
    this.createView_();
  };

CustomFields.FieldSegmentLed.prototype.showEditor_ = function() {
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

CustomFields.FieldSegmentLed.prototype.styleDiv = function () {
    Blockly.WidgetDiv.DIV.style.width = '15em';
    Blockly.WidgetDiv.DIV.style.height = '16em';
    Blockly.WidgetDiv.DIV.style.left = 'calc(50% - 7.5em)';
    Blockly.WidgetDiv.DIV.style.top = 'calc(50% - 8em)';
    Blockly.WidgetDiv.DIV.style.backgroundColor = '#030303dc';
    Blockly.WidgetDiv.DIV.style.borderRadius = '2%';
    Blockly.WidgetDiv.DIV.style.border = 'solid';
    Blockly.WidgetDiv.DIV.style.borderWidth = '1px';
    Blockly.WidgetDiv.DIV.style.color = '#a8d8f8';
    Blockly.WidgetDiv.DIV.style.boxShadow = '0 0 0.4em 0 #79c3f4';
    Blockly.WidgetDiv.DIV.style.textAlign = 'center';
    Blockly.WidgetDiv.DIV.style.alignItems = 'center';
    Blockly.WidgetDiv.DIV.style.justifyContent = 'center';
};

CustomFields.FieldSegmentLed.prototype.createWidgetView = function () {
    var ledSegmentModule = document.createElement('div');
    ledSegmentModule.textContent = 'LED SEGMENTS';
    ledSegmentModule.id = 'ledSegmentsModule';

    for(let i = 1; i < 5; ++i)
    {
        var display = document.createElement('div');
        display.className = '7segmentsDisplay';
        display.id = 'display' + i.toString();
        for(let j = 1; j < 8; ++j)
        {
            var segment = document.createElement('div');
            segment.className = 'segment';
            segment.id = 'segment' + i.toString() + j.toString();

            var segmentBorder = document.createElement('span');
            segmentBorder.className = 'segmentBorder';
            segmentBorder.id = 'segmentBorder' + i.toString() + j.toString();
            segment.appendChild(segmentBorder);
            display.appendChild(segment);
        }

        this.editorListeners_.push(
            Blockly.bindEvent_(segment, this.getMouseUp(), this, this.onSegmentClick),
        );

        ledSegmentModule.appendChild(display);
    }

    return maxtrixDiv;
};

CustomFields.FieldSegmentLed.prototype.onRingLedClick = function (event) {
    var curSegment = event.target;
    
    if(curSegment.style.backgroundColor != '#a8d8f8')
    {
        curSegment.style.backgroundColor = '#a8d8f8'
    }
    else
    {
        curSegment.style.backgroundColor = 'transparent';
    }
};

CustomFields.FieldSegmentLed.prototype.updateSize_ = function () {
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

CustomFields.FieldSegmentLed.prototype.render_ = function () {
    for (let i = 0; i < 4; i++) {
      var value;
      switch (i) {
        case 0:
          value = this.value_.segment1;
          break;
        case 1:
          value = this.value_.segment2;
          break;
        case 2:
          value = this.value_.segment3;
          break;
        case 3:
          value = this.value_.segment4;
          break;
        default:
            break;
      }

      let segmentsDisplayer = value.split(',').map(v => v !== 'false');
      for (let j = 0; j < 7; j++) {
        if (row[j]) {
          this.cellLed_[i][j].style.fill = '#a8d8f8';
        } else {
          this.cellLed_[i][j].style.fill = '#fff';
        }
      }
    }
    this.updateSize_();
};

CustomFields.FieldSegmentLed.prototype.renderEditor_ = function () {
    for (let i = 0; i < 4; i++) {
        var value;
        switch (i) {
            case 0:
            value = this.value_.segment1;
            break;
            case 1:
            value = this.value_.segment2;
            break;
            case 2:
            value = this.value_.segment3;
            break;
            case 3:
            value = this.value_.segment4;
            break;
            default:
                break;
        }
        let row = value.split(',').map(v => v !== 'false');
        for (let j = 0; j < 7; j++) {
            var id = 'segment' + (i + 1).toString() + (j + 1).toString();
            var idBorder = 'segmentBorder' + (i + 1).toString() + (j + 1).toString();
            if (row[j]) {
            document.getElementById(id).style.opacity = '1';
            document.getElementById(idBorder).style.opacity = '1';
            } else {
            document.getElementById(id).style.opacity = '0.1';
            document.getElementById(idBorder).style.opacity = '0.1';
            }
        }
    }
};

CustomFields.FieldSegmentLed.prototype.createView_ = function () {
    this.matrixGroup_ = Blockly.utils.dom.createSvgElement(
      'g',
      {
        transform: 'translate(0, 0)',
      },
      this.fieldGroup_,
    );
    for (var i = 0; i < 4; i++) {
        var offset = i * 30;
      for (var j = 0; j < 7; j++) {
        if (!this.cellLed_[i][j]) {
          this.cellLed_[i][j] = Blockly.utils.dom.createSvgElement(
            'rect',
            {
              class: 'cellSvg',
              x: j * 20 + 1,
              y: i * 20 + 1,
              width: 20,
              height: 20,
              rx: 5,
              ry: 5,
              fill: '#fff',
            },
            this.matrixGroup_,
          );
        }
      }
    }
  };

CustomFields.FieldSegmentLed.prototype.detectMobile = function () {
    var result = navigator.userAgent.match(
        /(iphone)|(ipod)|(ipad)|(android)|(blackberry)|(windows phone)|(symbian)/i,
    );

    if (result !== null) {
        return 'mobile';
    } else {
        return 'desktop';
    }
};

CustomFields.FieldSegmentLed.prototype.getMouseDown = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mousedown';
    } else {
      return 'touchstart';
    }
  };
  
  CustomFields.FieldSegmentLed.prototype.getMouseUp = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mouseup';
    } else {
      return 'touchend';
    }
  };
  
  CustomFields.FieldSegmentLed.prototype.getMouseMove = function () {
    if (this.detectMobile() == 'desktop') {
      return 'mousemove';
    } else {
      return 'touchmove';
    }
  };
  
  // add to tree
  Blockly.fieldRegistry.register('field_ledSegments', CustomFields.FieldSegmentLed);