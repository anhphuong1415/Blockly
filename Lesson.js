var Lesson = Lesson || Object.create(null);

Lesson = 
[
    [
        '<block type="dummy_start_block" x="400" y="50"></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+ 
        '</block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Rẽ trái</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">90</field>' + 
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Rẽ trái</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Lùi</field>' +
                            '<field name="Velocity">90</field>' + 
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ phải</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">90</field>' + 
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="430" y="200">' +
            '<field name="Direction">Rẽ trái</field>' +
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>' + 
        '<block type="robot_move" x="400" y="250">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Lùi</field>' +
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>', 

        '<block type="dummy_play_block" x="150" y="50"></block>'
    ],
    [
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="200">' +
            '<field name="Note">C</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' +
                        '<block type="playmusicnote">' +
                            '<field name="Note">C</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="rgb_led" x="430" y="200">' +
            '<field name="color_left">#ff0000</field>' + 
            '<field name="color_right">#ff0000</field>'+
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#ff0000</field>' + 
                            '<field name="color_right">#ff0000</field>'+
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#000000</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="rgb_led" x="430" y="200">' +
                                    '<field name="color_left">#ff0000</field>' + 
                                    '<field name="color_right">#ff0000</field>'+
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                    '<next>' +
                                        '<block type="rgb_led" x="430" y="200">' +
                                            '<field name="color_left">#000000</field>' + 
                                            '<field name="color_right">#000000</field>'+
                                            '<value name="Duration">' +
                                                '<block type="calculator"><field name="Value">1</field></block>' +
                                            '</value>'+
                                        '</block>' +  
                                    '</next>' +
                                '</block>' +
                            '</next>' +    
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="rgb_led">' +
                            '<field name="color_left">#000000</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>'
    ],
    [
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="130">' +
            '<field name="Note">C</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>' +
        '<block type="playmusicnote" x="450" y="200">' +
            '<field name="Note">C</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>' + 
        '<block type="playmusicnote" x="470" y="250">' +
            '<field name="Note">C</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block  type="loop">' +
                    '<field name="NAME">1</field>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="playmusicnote" x="450" y="200">' +
            '<field name="Note">C</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="130">' +
            '<field name="Note">C</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Rẽ phải</field>' +
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff6600</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ phải</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">10</field></block>' +
                    '</value>'+
                        '<next>' +
                            '<block type="robot_move">' +
                                '<field name="Direction">Rẽ trái</field>' +
                                '<field name="Velocity">90</field>' + 
                                '<value name="Duration">' +
                                    '<block type="calculator"><field name="Value">1</field></block>' +
                                '</value>'+
                                    '<next>' +
                                        '<block type="rgb_led">' +
                                            '<field name="color_left">#000000</field>' + 
                                            '<field name="color_right">#ff0000</field>'+
                                            '<value name="Duration">' +
                                                '<block type="calculator"><field name="Value">10</field></block>' +
                                            '</value>'+
                                                '<next>' +
                                                    '<block type="robot_move">'+
                                                        '<field name="Direction">Rẽ phải</field>'+
                                                        '<field name="Velocity">90</field>' + 
                                                        '<value name="Duration">' +
                                                            '<block type="calculator"><field name="Value">1</field></block>' +
                                                        '</value>'+
                                                    '</block>' +
                                                '</next>' +
                                        '</block>' +
                                    '</next>' +
                            '</block>' +
                        '</next>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block  type="loop" x="400" y="300">' +
            '<field name="NAME">9</field>' +
        '</block>'
    ],
    [
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
                '<next>' +
                    '<block type="stop_move"></block>' +
                '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led" x="430" y="200">' +
                    '<field name="color_left">#66ffff</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' +
                        '<block type="playmusicnote" x="430" y="130">' +
                            '<field name="Note">C</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +    
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="playmusicnote" x="430" y="130">' +
                    '<field name="Note">C</field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#66ffff</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="playmusicnote" x="430" y="130">' +
                                    '<field name="Note">C</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                    '<next>' +
                                        '<block type="rgb_led" x="430" y="200">' +
                                            '<field name="color_left">#66ffff</field>' + 
                                            '<field name="color_right">#000000</field>'+
                                            '<value name="Duration">' +
                                                '<block type="calculator"><field name="Value">1</field></block>' +
                                            '</value>'+
                                        '</block>' +  
                                    '</next>' +
                                '</block>' +
                            '</next>' +    
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="playmusicnote" x="430" y="130">' +
                    '<field name="Note">A</field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#66ffff</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="playmusicnote" x="430" y="130">' +
                                    '<field name="Note">F</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                    '<next>' +
                                        '<block type="rgb_led" x="430" y="200">' +
                                            '<field name="color_left">#66ffff</field>' + 
                                            '<field name="color_right">#000000</field>'+
                                            '<value name="Duration">' +
                                                '<block type="calculator"><field name="Value">1</field></block>' +
                                            '</value>'+
                                        '</block>' +  
                                    '</next>' +
                                '</block>' +
                            '</next>' +    
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="loop">' +
                    '<field name="NAME">3</field>' +
                        '<statement name="command">' +
                            '<block type="playmusicnote" x="430" y="130">' +
                                '<field name="Note">A</field>' +
                                '<value name="Duration">' +
                                    '<block type="calculator"><field name="Value">1</field></block>' +
                                '</value>'+
                                '<next>' + 
                                    '<block type="rgb_led" x="430" y="200">' +
                                        '<field name="color_left">#66ffff</field>' + 
                                        '<field name="color_right">#000000</field>'+
                                        '<value name="Duration">' +
                                            '<block type="calculator"><field name="Value">1</field></block>' +
                                        '</value>'+
                                        '<next>' +
                                            '<block type="playmusicnote" x="430" y="130">' +
                                                '<field name="Note">F</field>' +
                                                '<value name="Duration">' +
                                                    '<block type="calculator"><field name="Value">1</field></block>' +
                                                '</value>'+
                                                '<next>' +
                                                    '<block type="rgb_led" x="430" y="200">' +
                                                        '<field name="color_left">#66ffff</field>' + 
                                                        '<field name="color_right">#000000</field>'+
                                                        '<value name="Duration">' +
                                                            '<block type="calculator"><field name="Value">1</field></block>' +
                                                        '</value>'+
                                                    '</block>' +  
                                                '</next>' +
                                            '</block>' +
                                        '</next>' +    
                                    '</block>' +
                                '</next>' +
                            '</block>' +
                        '</statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="robot_move" x="450" y="330">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="robot_move" x="450" y="330">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">10</field></block>' +
                    '</value>'+
                    '<next>' +
                        '<block type="loop">' +
                            '<field name="NAME">3</field>' +
                                '<statement name="command">' +
                                    '<block type="playmusicnote" x="430" y="130">' +
                                        '<field name="Note">A</field>' +
                                        '<value name="Duration">' +
                                            '<block type="calculator"><field name="Value">1</field></block>' +
                                        '</value>'+
                                        '<next>' + 
                                            '<block type="rgb_led" x="430" y="200">' +
                                                '<field name="color_left">#66ffff</field>' + 
                                                '<field name="color_right">#000000</field>'+
                                                '<value name="Duration">' +
                                                    '<block type="calculator"><field name="Value">1</field></block>' +
                                                '</value>'+
                                                '<next>' +
                                                    '<block type="playmusicnote" x="430" y="130">' +
                                                        '<field name="Note">F</field>' +
                                                        '<value name="Duration">' +
                                                            '<block type="calculator"><field name="Value">1</field></block>' +
                                                        '</value>'+
                                                        '<next>' +
                                                            '<block type="rgb_led" x="430" y="200">' +
                                                                '<field name="color_left">#66ffff</field>' + 
                                                                '<field name="color_right">#000000</field>'+
                                                                '<value name="Duration">' +
                                                                    '<block type="calculator"><field name="Value">1</field></block>' +
                                                                '</value>'+
                                                            '</block>' +  
                                                        '</next>' +
                                                    '</block>' +
                                                '</next>' +    
                                            '</block>' +
                                        '</next>' +
                                    '</block>' +
                                '</statement>' +
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>'
    ],
    // LESSON 5
    [
        //5.1
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="150">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
        '</block>' + 
        '<block type="wait_seconds" x="412" y="200">' +
            '<field name="SECONDS">1</field>' + 
        '</block>' +
        '<block type="robot_move" x="450" y="250">'+
                    '<field name="Direction">Lùi</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
        '</block>',
        //5.2
        '<block type="dummy_play_block" x="400" y="50"></block>',
        
        //5.3
        '<block type="dummy_play_block" x="150" y="50">' +
            '<next>' + 
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator">' +
                            '<field name="Value">10</field>' +
                        '</block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>' +
        '<block type="wait_until" x="61" y="222">' +
            '<value name="condition">' +
                '<block type="logic_compare">' +
                    '<field name="OP">LTE</field>' +
                    '<value name="A">' +
                        '<block type="srf05">' +
                            '<field name="port">Port 1</field>' +
                        '</block>' +
                    '</value>' +
                    '<value name="B">' +
                        '<block type="calculator">' +
                            '<field name="Value">10</field>' +
                        '</block>' +
                    '</value>' +
                '</block>' +
            '</value>' +
        '</block>' + 
        '<block type="stop_move" x="208" y="293"></block>',


        //5.4
        '<block type="dummy_play_block" x="150" y="50">' +
            '<next>' + 
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">100</field></block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>' +
        '<block type="srf05" x="160" y="300">' +
            '<field name="port">Port 1</field>' +
        '</block>',

        //5.5
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">90</field>' + 
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' + 
            '</next>' +
        '</block>',

        //5.6
        '<block type="dummy_play_block" x="150" y="50">' +
            '<next>' +
                '<block type="while"></block>' +
            '</next>' + 
        '</block>' +
        '<block type="robot_move" x="200" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' + 
                '<block type="wait_until">' +
                    '<value name="condition">' +
                        '<block type="logic_compare">' +
                            '<field name="OP">LTE</field>' +
                            '<value name="A">' +
                                '<block type="srf05">' +
                                    '<field name="port">Port 1</field>' +
                                '</block>' +
                            '</value>' +
                            '<value name="B">' +
                                '<block type="calculator">' +
                                    '<field name="Value">10</field>' +
                                '</block>' +
                            '</value>' +
                        '</block>' +
                    '</value>' +
                    '<next>' + 
                        '<block type="robot_move">'+
                            '<field name="Direction">Lùi</field>'+
                            '<field name="Velocity">90</field>' + 
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' + 
                    '</next>' +
                '</block>'+  
            '</next>' +
        '</block>',

        //5.7
        '<block type="dummy_play_block" x="150" y="50">' +
        '</block>' +
        '<block type="robot_move" x="200" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">90</field>' + 
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' + 
                '<block type="wait_until">' +
                    '<value name="condition">' +
                        '<block type="logic_compare">' +
                            '<field name="OP">LTE</field>' +
                            '<value name="A">' +
                                '<block type="srf05">' +
                                    '<field name="port">Port 1</field>' +
                                '</block>' +
                            '</value>' +
                            '<value name="B">' +
                                '<block type="calculator">' +
                                    '<field name="Value">10</field>' +
                                '</block>' +
                            '</value>' +
                        '</block>' +
                    '</value>' +
                    '<next>' + 
                        '<block type="robot_move">'+
                            '<field name="Direction">Lùi</field>'+
                            '<field name="Velocity">90</field>' + 
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' + 
                    '</next>' +
                '</block>'+  
            '</next>' +
        '</block>',
    ],
    
    // LESSON 6
    [
        //6.1
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="150" y="50"></block>' + 
        '<block type="logic_compare" x="200" y="150">' +
            '<field name="OP">LTE</field>' +
            '<value name="A">' +
                '<block type="srf05">' +
                    '<field name="port">Port 1</field>' +
                '</block>' +
            '</value>' +
            '<value name="B">' +
                '<block type="calculator">' +
                    '<field name="Value">10</field>' +
                '</block>' +
            '</value>' +
        '</block>' +
        '<block type="playmusicnote" x="150" y="250">' +
            '<field name="Note">F</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',
        
        //6.2
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="150" y="50">' +
            '<next>' + 
                '<block type="wait_until">' +
                    '<value name="condition">' +
                        '<block type="logic_compare">' +
                            '<field name="OP">LTE</field>' +
                            '<value name="A">' +
                                '<block type="srf05">' +
                                    '<field name="port">Port 1</field>' +
                                '</block>' +
                            '</value>' +
                            '<value name="B">' +
                                '<block type="calculator">' +
                                    '<field name="Value">10</field>' +
                                '</block>' +
                            '</value>' +
                        '</block>' +
                    '</value>' +
                    '<next>' + 
                        '<block type="playmusicnote" x="150" y="250">' +
                            '<field name="Note">F</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>'+ 
                    '</next>' +
                '</block>'+  
            '</next>' +
        '</block>',

        //6.3
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if_block">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">GT</field>' +
                                    '<value name="A"><block type="srf05"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">10</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="if block">' +
                                '<block type="rgb_led">' +
                                    '<field name="color_left">#00cccc</field>' +
                                    '<field name="color_right">#00cccc</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">10</field></block>' +
                                    '</value>'+
                                '</block>' +
                            '</statement>' +
                            '<statement name="else block">' +   
                                '<block type="rgb_led">' +
                                    '<field name="color_left">#ff0000</field>' +
                                    '<field name="color_right">#ff0000</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">10</field></block>' +
                                    '</value>'+
                                '</block>' +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //6.4
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions"></statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="logic_compare" x="300" y="160"><field name="OP">GT</field>' +
            '<value name="A"><block type="srf05"><field name="port">Port 1</field></block></value>' +
            '<value name="B"><block type="math_number"><field name="NUM">10</field></block></value>' +
        '</block>' +
        '<block type="rgb_led" x="430" y="250">' +
            '<field name="color_left">#00cccc</field>' +
            '<field name="color_right">#00cccc</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
        '</block>' +
        '<block type="rgb_led" x="430" y="320">' +
            '<field name="color_left">#ff0000</field>' +
            '<field name="color_right">#ff0000</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
        '</block>',

        //6.5
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions"></statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="srf05" x="400" y="200"><field name="port">Port 1</field></block>',

        //6.6
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions"></statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //6.7
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if_block">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">GT</field>' +
                                    '<value name="A"><block type="srf05"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">10</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="if block">' +
                                '<block type="robot_move">' +
                                    '<field name="Direction">Tiến</field>' +
                                    '<field name="Velocity">50</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">100</field></block>' +
                                    '</value>'+
                                '</block>' +
                            '</statement>' +
                            '<statement name="else block">' +   
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>' +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="rgb_led" x="430" y="270">' +
            '<field name="color_left">#00cccc</field>' +
            '<field name="color_right">#00cccc</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
        '</block>' +
        '<block type="rgb_led" x="430" y="340">' +
            '<field name="color_left">#ff0000</field>' +
            '<field name="color_right">#ff0000</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
        '</block>',
    ],

    //Lesson 7
    [
        //7.1
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if_block">' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="playmusicnote" x="380" y="300">' +
            '<field name="Note">C</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
        '</block>',

        //7.2
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="sound_sensor">' +
                                    '<field name="Port">Port 1</field>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>' +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //7.3
        '<block type="dummy_play_block" x="350" y="50"></block>' +
        '<block type="if_block" x="400" y="150"></block>', 

        //7.4
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="while">' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="robot_move" x="400" y="200">' +
            '<field name="Direction">Rẽ trái</field>' +
            '<field name="Velocity">50</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">1</field></block>' +
            '</value>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Rẽ phải</field>' +
                    '<field name="Velocity">50</field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>'+
            '</next>' +
        '</block>',

        //7.5
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if_block">' +
                            '<value name="condition">' +
                                '<block type="sound_sensor">' +
                                    '<field name="Port">Port 1</field>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="if block">' +
                                '<block type="robot_move" x="400" y="200">' +
                                    '<field name="Direction">Rẽ trái</field>' +
                                    '<field name="Velocity">50</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                    '<next>' +
                                        '<block type="robot_move">' +
                                            '<field name="Direction">Rẽ phải</field>' +
                                            '<field name="Velocity">50</field>' +
                                            '<value name="Duration">' +
                                                '<block type="calculator"><field name="Value">1</field></block>' +
                                            '</value>'+
                                        '</block>'+
                                    '</next>' +
                                '</block>' +
                            '</statement>' +
                            '<statement name="else block">' +   
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //7.6
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="sound_sensor">' +
                                    '<field name="Port">Port 1</field>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="rgb_led">' +
                                    '<field name="color_left">#00cccc</field>' +
                                    '<field name="color_right">#00cccc</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">10</field></block>' +
                                    '</value>'+
                                '</block>' +
                            '</statement>' +
                            '<next>' +
                                '<block type="if1"></block>' +
                            '</next>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',
    ],

    //Lesson8 
    [
        //8.1
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">GT</field>' +
                                    '<value name="A"><block type="srf05"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">10</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="playmusicnote" x="380" y="300">' +
                            '<field name="Note">C</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //8.2
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="srf05"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">1</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="playmusicnote" x="380" y="300">' +
                            '<field name="Note">C</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //8.3
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                    '</statement>' +
                    '<next>' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>'+
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="if1" x="300" y="250">>' +
            '<value name="condition">' +
                '<block type="logic_compare"><field name="OP">LT</field>' +
                    '<value name="A"><block type="srf05"><field name="port">Port 1</field></block></value>' +
                    '<value name="B"><block type="math_number"><field name="NUM">1</field></block></value>' +
                '</block>' +
            '</value>' +
            '<statement name="command">' +
                '<block type="break_continue_loop">' +
                    '<field name="action">thoát vòng lặp</field>' +
                '</block>'  +
            '</statement>' +
        '</block>',

        //8.4
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="math_number"><field name="NUM">1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">10</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>'+
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="srf05" x="300" y="250"><field name="port">Port 1</field></block>',

        //8.5
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="math_number"><field name="NUM">1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">10</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="rgb_led">' +
                            '<field name="color_left">#00cccc</field>' +
                            '<field name="color_right">#00cccc</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="playmusicnote" x="380" y="300">' +
                                    '<field name="Note">C</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                '</block>' +
                            '</next>' +        
                        '</block>'  +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //8.6
        '<block type="dummy_play_block" x="250" y="50"></block>' +
        '<block type="rgb_led" x="300" y="150">' +
            '<field name="color_left">#00cccc</field>' +
            '<field name="color_right">#00cccc</field>' +
            '<value name="Duration">' +
                '<block type="calculator"><field name="Value">10</field></block>' +
            '</value>'+
            '<next>' +
                '<block type="playmusicnote" x="380" y="300">' +
                    '<field name="Note">C</field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                    '<next>' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>'+
                    '</next>' +
                '</block>' +
            '</next>' +        
        '</block>'
    ],

    //Lesson 9
    [
        //9.1
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="light_sensor"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">170</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="playmusicnote" x="380" y="300">' +
                            '<field name="Note">C</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //9.2
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="light_sensor"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">1</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="rgb_led">' +
                            '<field name="color_left">#00cccc</field>' +
                            '<field name="color_right">#00cccc</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">10</field></block>' +
                            '</value>'+
                        '</block>'  +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //9.3
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="light_sensor"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">170</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="rgb_led">' +
                            '<field name="color_left">#00cccc</field>' +
                            '<field name="color_right">#00cccc</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">3</field></block>' +
                            '</value>'+
                        '</block>'  +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //9.4
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if_block">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">LT</field>' +
                                    '<value name="A"><block type="math_number"><field name="NUM">1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">1</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="if block">' +
                                '<block type="rgb_led">' +
                                    '<field name="color_left">#000000</field>' +
                                    '<field name="color_right">#000000</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                '</block>' +
                            '</statement>' +
                            '<statement name="else block">' +   
                                '<block type="rgb_led">' +
                                    '<field name="color_left">#00cccc</field>' +
                                    '<field name="color_right">#00cccc</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                '</block>'  +
                            '</statement>' +
                            '<next>' +
                                '<block type="wait_seconds">' +
                                    '<field name="SECONDS">1</field>' +
                                '</block>' +
                            '</next>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //9.5
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">GT</field>' +
                                    '<value name="A"><block type="light_sensor"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">800</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                    '<next>' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                        '</block>'  +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        //9.6
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                '<block type="logic_compare"><field name="OP">GT</field>' +
                                    '<value name="A"><block type="light_sensor"><field name="port">Port 1</field></block></value>' +
                                    '<value name="B"><block type="math_number"><field name="NUM">800</field></block></value>' +
                                '</block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="break_continue_loop">' +
                                    '<field name="action">thoát vòng lặp</field>' +
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',
    ],

    //Lesson 10
    [
        //10.1
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">50</field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>'  +
            '</next>' +
        '</block>' +
        '<block type="calculator"><field name="Value">175</field></block>',

        //10.2 Refactor block robot move for complete
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">50</field>' +
                    '<value name="Duration">' +
                        '<block type="math_arithmetic">' +
                            '<field name="OP">ADD</field>' +
                            '<value name="A">' +
                                '<block type="calculator">' +
                                    '<field name="Value">1</field>' +
                                '</block>' +
                            '</value>' +
                            '<value name="B">' +
                                '<block type="calculator">' +
                                    '<field name="Value">10</field>' +
                                '</block>' +
                            '</value>' +
                        '</block>' +
                    '</value>' +
                '</block>'  +
            '</next>' +
        '</block>' +
        '<block type="calculator" x="300" y="200"><field name="Value">175</field></block>',

        //10.3
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="wait_seconds">' +
                                    '<field name="SECONDS">1</field>' +
                                '</block>'  +
                            '</next>' +
                        '</block>'  +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="srf05" x="300" y="250"><field name="port">Port 1</field></block>',

        //10.4
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="wait_seconds">' +
                                    '<field name="SECONDS">1</field>' +
                                '</block>'  +
                            '</next>' +
                        '</block>'  +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="math_arithmetic" x="300" y="250">' +
            '<field name="OP">MULTIPLY</field>' +
            '<value name="A">' +
                '<block type="srf05"><field name="port">Port 1</field></block>' +
            '</value>' +
            '<value name="B">' + 
                '<block type="math_number"><field name="NUM">10</field></block>' +
            '</value>' +
        '</block>',

        //10.5
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">50</field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>'  +
            '</next>' +
        '</block>' +
        '<block type="math_number" x="300" y="150"><field name="NUM">1000</field></block>' +
        '<block type="math_arithmetic" x="300" y="250">' +
            '<field name="OP">DIVIDE</field>' +
            '<value name="A">' +
                '<block type="math_number"><field name="NUM">1</field></block>' +
            '</value>' +
            '<value name="B">' + 
                '<block type="math_number"><field name="NUM">4</field></block>' +
            '</value>' +
        '</block>',

        //10.6
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">50</field>' +
                            '<value name="Duration">' +
                                '<block type="calculator"><field name="Value">1</field></block>' +
                            '</value>'+
                            '<next>' +
                                '<block type="wait_seconds">' +
                                    '<field name="SECONDS">1</field>' +
                                '</block>'  +
                            '</next>' +
                        '</block>'  +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="math_arithmetic" x="300" y="250">' +
            '<field name="OP">DIVIDE</field>' +
            '<value name="A">' +
                '<block type="math_number"><field name="NUM">1</field></block>' +
            '</value>' +
            '<value name="B">' + 
                '<block type="math_number"><field name="NUM">4</field></block>' +
            '</value>' +
        '</block>'
    ],

    //Lesson 11
    [
        //11.1
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="ringled">' +
                    '<field name="ringLedModule">Port 1</field>' + 
                    '<field name="LED" L1="#ffffff" L3="#ffffff" L4="#ffffff" L5="#ffffff" L2="#ffffff" L6="#ffffff" L7="#ffffff" L8="#ffffff" L9="#ffffff" L10="#ffffff" L11="#ffffff" L12="#ffffff"></field>' + 
                '</block>' +
            '</next>' +
        '</block>',

        //11.2
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="ringled">' +
                    '<field name="ringLedModule">Port 1</field>' + 
                    '<field name="LED" L1="#ffffff" L3="#ffffff" L4="#ffffff" L5="#ffffff" L2="#ffffff" L6="#ffffff" L7="#ffffff" L8="#ffffff" L9="#ffffff" L10="#ffffff" L11="#ffffff" L12="#ffffff"></field>' + 
                '</block>' +
            '</next>' +
        '</block>',

        //11.3
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="ringled">' +
                    '<field name="ringLedModule">Port 1</field>' + 
                    '<field name="LED" L1="#ffffff" L3="#ffffff" L4="#ffffff" L5="#ffffff" L2="#ffffff" L6="#ffffff" L7="#ffffff" L8="#ffffff" L9="#ffffff" L10="#ffffff" L11="#ffffff" L12="#ffffff"></field>' + 
                '</block>' +
            '</next>' +
        '</block>',
        
        
        //11.4
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="playwithmatrix">' +
                    '<field name="Port">Port 1</field>' +
                    '<field name="Map" R1="false,false,false,false,false,false,false,false" R2="false,true,false,false,false,false,true,false" R3="true,false,true,false,false,true,false,true" R4="false,false,false,false,false,false,false,false" R5="false,false,false,false,false,false,false,false" R6="false,true,false,false,false,false,true,false" R7="false,false,true,true,true,true,false,false" R8="false,false,false,false,false,false,false,false"></field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' +
            '</next>' +
        '</block>',
        
        //11.5
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="playwithmatrix">' +
                    '<field name="Port">Port 1</field>' +
                    '<field name="Map" R1="false,false,false,false,false,false,false,false" R2="false,false,false,false,false,false,false,false" R3="false,false,false,false,false,false,false,false" R4="false,false,false,false,false,false,false,false" R5="false,false,false,false,false,false,false,false" R6="false,false,false,false,false,false,false,false" R7="false,false,false,false,false,false,false,false" R8="false,false,false,false,false,false,false,false"></field>' +
                    '<value name="Duration">' +
                        '<block type="calculator"><field name="Value">1</field></block>' +
                    '</value>'+
                '</block>' +
            '</next>' +
        '</block>',

        //11.6
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                    '<block type="sound_sensor"><field name="port">Port 1</field></block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="playmusicnote" x="380" y="300">' +
                                    '<field name="Note">C</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //11.7
        '<block type="dummy_play_block" x="250" y="50">' +
        '</block>' +
        '<block type="if_block" x="250" y="150">' +
            '<value name="condition">' +
                    '<block type="sound_sensor"><field name="port">Port 1</field></block>' +
            '</value>' +
        '</block>',

        //11.8 TODO: refactor color sensor block
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                    '<block type="sound_sensor"><field name="port">Port 1</field></block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="playmusicnote" x="380" y="300">' +
                                    '<field name="Note">C</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',

        //11.9 TODO: refactor color sensor block
        '<block type="dummy_play_block" x="250" y="50">' +
            '<next>' +
                '<block type="while">' +
                    '<statement name="actions">' +
                        '<block type="if1">' +
                            '<value name="condition">' +
                                    '<block type="sound_sensor"><field name="port">Port 1</field></block>' +
                            '</value>' +
                            '<statement name="command">' +
                                '<block type="playmusicnote" x="380" y="300">' +
                                    '<field name="Note">C</field>' +
                                    '<value name="Duration">' +
                                        '<block type="calculator"><field name="Value">1</field></block>' +
                                    '</value>'+
                                '</block>'  +
                            '</statement>' +
                        '</block>' +
                    '</statement>' +
                '</block>' +
            '</next>' +
        '</block>',
    ]
];
