var Lesson = Lesson || Object.create(null);

Lesson = 
[
    [
        '<block type="dummy_play_block" x="400" y="50"></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">5</field></block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">5</field></block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Rẽ trái</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">10</field>' + 
                            '<field name="Duration">1</field>' +
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Rẽ trái</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Lùi</field>' +
                            '<field name="Velocity">10</field>' + 
                            '<field name="Duration">1</field>' +
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ phải</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Tiến</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Tiến</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' + 
                        '<block type="robot_move">' +
                            '<field name="Direction">Tiến</field>' +
                            '<field name="Velocity">10</field>' + 
                            '<field name="Duration">1</field>' +
                        '</block>' + 
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' + 
        '<block type="robot_move" x="430" y="200">' +
            '<field name="Direction">Rẽ trái</field>' +
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>' +
        '</block>' + 
        '<block type="robot_move" x="400" y="250">'+
            '<field name="Direction">Lùi</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Lùi</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>', 

        '<block type="dummy_play_block" x="400" y="50"></block>'
    ],
    [
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="200">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                    '<next>' +
                        '<block type="playmusicnote">' +
                            '<field name="Note">C</field><field name="Duration">1</field>' +
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="rgb_led" x="430" y="200">' +
            '<field name="color_left">#ff0000</field>' + 
            '<field name="color_right">#ff0000</field>'+
            '<field name="duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#ff0000</field>'+
                    '<field name="duration">1</field>' +
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#ff0000</field>' + 
                            '<field name="color_right">#ff0000</field>'+
                            '<field name="duration">1</field>' +
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
                    '<field name="duration">1</field>' +
                    '<next>' + 
                        '<block type="rgb_led" x="430" y="200">' +
                            '<field name="color_left">#000000</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<field name="duration">1</field>' +
                            '<next>' +
                                '<block type="rgb_led" x="430" y="200">' +
                                    '<field name="color_left">#ff0000</field>' + 
                                    '<field name="color_right">#ff0000</field>'+
                                    '<field name="duration">1</field>' +
                                    '<next>' +
                                        '<block type="rgb_led" x="430" y="200">' +
                                            '<field name="color_left">#000000</field>' + 
                                            '<field name="color_right">#000000</field>'+
                                            '<field name="duration">1</field>' +
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
                    '<field name="duration">1</field>' +
                    '<next>' + 
                        '<block type="rgb_led">' +
                            '<field name="color_left">#000000</field>' + 
                            '<field name="color_right">#000000</field>'+
                            '<field name="duration">1</field>' +
                        '</block>' +
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>'
    ],
    [
        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="130">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>' +
        '<block type="playmusicnote" x="450" y="200">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>' + 
        '<block type="playmusicnote" x="470" y="250">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block  type="loop">' +
                    '<field name="NAME">1</field>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="playmusicnote" x="450" y="200">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="playmusicnote" x="430" y="130">' +
            '<field name="Note">C</field><field name="Duration">1</field>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field>'+
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Rẽ phải</field>' +
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">1</field>' +
                '</block>' + 
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<field name="duration">10</field>' +
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff6600</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<field name="duration">10</field>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="robot_move" x="450" y="200">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">5</field></block>' + 
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ phải</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">1</field></block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' +
                '<block type="rgb_led">' +
                    '<field name="color_left">#ff0000</field>' + 
                    '<field name="color_right">#000000</field>'+
                    '<field name="duration">10</field>' +
                        '<next>' +
                            '<block type="robot_move">' +
                                '<field name="Direction">Rẽ trái</field>' +
                                '<field name="Velocity">10</field>' + 
                                '<field name="Duration">1</field>' +
                                    '<next>' +
                                        '<block type="rgb_led">' +
                                            '<field name="color_left">#000000</field>' + 
                                            '<field name="color_right">#ff0000</field>'+
                                            '<field name="duration">10</field>' +
                                                '<next>' +
                                                    '<block type="robot_move">'+
                                                    '<field name="Direction">Rẽ phải</field>'+
                                                    '<field name="Velocity">10</field>' + 
                                                    '<field name="Duration">1</field></block>' +
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
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">100</field>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50"></block>' +
        '<block type="robot_move" x="400" y="300">'+
            '<field name="Direction">Rẽ trái</field>'+
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">10</field>'+
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
                    '<field name="duration">1</field>' +
                    '<next>' +
                        '<block type="playmusicnote" x="430" y="130">' +
                            '<field name="Note">C</field><field name="Duration">1</field>' +
                        '</block>' +
                    '</next>' +    
                '</block>' +
            '</next>' +
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="playmusicnote" x="430" y="130">' +
                    '<field name="Note">C</field><field name="Duration">1</field>' +
                        '<next>' + 
                            '<block type="rgb_led" x="430" y="200">' +
                                '<field name="color_left">#66ffff</field>' + 
                                '<field name="color_right">#000000</field>'+
                                '<field name="duration">1</field>' +
                                '<next>' +
                                    '<block type="playmusicnote" x="430" y="130">' +
                                        '<field name="Note">C</field><field name="Duration">1</field>' +
                                            '<next>' +
                                                '<block type="rgb_led" x="430" y="200">' +
                                                    '<field name="color_left">#66ffff</field>' + 
                                                    '<field name="color_right">#000000</field>'+
                                                    '<field name="duration">1</field>' +
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
                    '<field name="Note">A</field><field name="Duration">1</field>' +
                        '<next>' + 
                            '<block type="rgb_led" x="430" y="200">' +
                                '<field name="color_left">#66ffff</field>' + 
                                '<field name="color_right">#000000</field>'+
                                '<field name="duration">1</field>' +
                                '<next>' +
                                    '<block type="playmusicnote" x="430" y="130">' +
                                        '<field name="Note">F</field><field name="Duration">1</field>' +
                                            '<next>' +
                                                '<block type="rgb_led" x="430" y="200">' +
                                                    '<field name="color_left">#66ffff</field>' + 
                                                    '<field name="color_right">#000000</field>'+
                                                    '<field name="duration">1</field>' +
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
                                '<field name="Note">A</field><field name="Duration">1</field>' +
                                    '<next>' + 
                                        '<block type="rgb_led" x="430" y="200">' +
                                            '<field name="color_left">#66ffff</field>' + 
                                            '<field name="color_right">#000000</field>'+
                                            '<field name="duration">1</field>' +
                                            '<next>' +
                                                '<block type="playmusicnote" x="430" y="130">' +
                                                    '<field name="Note">F</field><field name="Duration">1</field>' +
                                                        '<next>' +
                                                            '<block type="rgb_led" x="430" y="200">' +
                                                                '<field name="color_left">#66ffff</field>' + 
                                                                '<field name="color_right">#000000</field>'+
                                                                '<field name="duration">1</field>' +
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
            '<field name="Velocity">10</field>' + 
            '<field name="Duration">10</field>'+
        '</block>',

        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="robot_move" x="450" y="330">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">10</field>'+
                    '<next>' +
                        '<block type="loop">' +
                            '<field name="NAME">3</field>' +
                                '<statement name="command">' +
                                    '<block type="playmusicnote" x="430" y="130">' +
                                        '<field name="Note">A</field><field name="Duration">1</field>' +
                                            '<next>' + 
                                                '<block type="rgb_led" x="430" y="200">' +
                                                    '<field name="color_left">#66ffff</field>' + 
                                                    '<field name="color_right">#000000</field>'+
                                                    '<field name="duration">1</field>' +
                                                    '<next>' +
                                                        '<block type="playmusicnote" x="430" y="130">' +
                                                            '<field name="Note">F</field><field name="Duration">1</field>' +
                                                                '<next>' +
                                                                    '<block type="rgb_led" x="430" y="200">' +
                                                                        '<field name="color_left">#66ffff</field>' + 
                                                                        '<field name="color_right">#000000</field>'+
                                                                        '<field name="duration">1</field>' +
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
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">10</field>'+
        '</block>' + 
        '<block type="wait_seconds" x="412" y="200">' +
            '<field name="SECONDS">1</field>' + 
        '</block>' +
        '<block type="robot_move" x="450" y="250">'+
                    '<field name="Direction">Lùi</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">10</field>'+
        '</block>',
        //5.2
        '<block type="dummy_play_block" x="400" y="50"></block>',
        
        //5.3
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="400" y="50"></block>',

        //5.4
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">10</field>'+
                '</block>' + 
            '</next>' +
        '</block>' +
        '<block type="srf05" x="430" y="300">' +
            '<field name="port">Port 1</field>' +
        '</block>',
        //5.5
        '<block type="dummy_play_block" x="400" y="50">' +
            '<next>' + 
                '<block type="robot_move">'+
                    '<field name="Direction">Tiến</field>'+
                    '<field name="Velocity">10</field>' + 
                    '<field name="Duration">10</field>'+
                '</block>' + 
            '</next>' +
        '</block>',

        //5.6
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="400" y="50"></block>',

        //5.7
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="400" y="50"></block>',
    ],
    
    // LESSON 6
    [
        //6.1
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="400" y="50"></block>',
        
        //6.2
        // TODO: add wait until ... block
        '<block type="dummy_play_block" x="400" y="50"></block>',

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
                                    '<field name="duration">10</field>' +
                                '</block>' +
                            '</statement>' +
                            '<statement name="else block">' +   
                                '<block type="rgb_led">' +
                                    '<field name="color_left">#ff0000</field>' +
                                    '<field name="color_right">#ff0000</field>' +
                                    '<field name="duration">10</field>' +
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
            '<field name="duration">10</field>' +
        '</block>' +
        '<block type="rgb_led" x="430" y="320">' +
            '<field name="color_left">#ff0000</field>' +
            '<field name="color_right">#ff0000</field>' +
            '<field name="duration">10</field>' +
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
                                    '<field name="Duration">100</field>' +
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
            '<field name="duration">10</field>' +
        '</block>' +
        '<block type="rgb_led" x="430" y="340">' +
            '<field name="color_left">#ff0000</field>' +
            '<field name="color_right">#ff0000</field>' +
            '<field name="duration">10</field>' +
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
            '<field name="Note">C</field><field name="Duration">1</field>' +
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
            '<field name="Duration">1</field>' +
            '<next>' +
                '<block type="robot_move">' +
                    '<field name="Direction">Rẽ phải</field>' +
                    '<field name="Velocity">50</field>' +
                    '<field name="Duration">1</field>' +
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
                                    '<field name="Duration">1</field>' +
                                    '<next>' +
                                        '<block type="robot_move">' +
                                            '<field name="Direction">Rẽ phải</field>' +
                                            '<field name="Velocity">50</field>' +
                                            '<field name="Duration">1</field>' +
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
                                    '<field name="duration">10</field>' +
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
                            '<field name="Note">C</field><field name="Duration">1</field>' +
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
                            '<field name="Note">C</field><field name="Duration">1</field>' +
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
                            '<field name="Duration">1</field>' +
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
                            '<field name="Duration">1</field>' +
                        '</block>'+
                    '</next>' +
                '</block>' +
            '</next>' +
        '</block>' +
        '<block type="srf05" x="300" y="250"><field name="port">Port 1</field></block>',

        //8.5
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
                        '<block type="rgb_led">' +
                            '<field name="color_left">#00cccc</field>' +
                            '<field name="color_right">#00cccc</field>' +
                            '<field name="duration">10</field>' +
                            '<next>' +
                                '<block type="playmusicnote" x="380" y="300">' +
                                '   <field name="Note">C</field><field name="Duration">1</field>' +
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
            '<field name="duration">10</field>' +
            '<next>' +
                '<block type="playmusicnote" x="380" y="300">' +
                    '<field name="Note">C</field><field name="Duration">1</field>' +
                    '<next>' +
                        '<block type="robot_move">' +
                            '<field name="Direction">Rẽ phải</field>' +
                            '<field name="Velocity">50</field>' +
                            '<field name="Duration">1</field>' +
                        '</block>'+
                    '</next>' +
                '</block>' +
            '</next>' +        
        '</block>'
    ]
];
