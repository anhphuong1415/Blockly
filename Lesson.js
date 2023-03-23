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
            '<block type="while">' +
                '<statement name="actions">' +
                    
                '</statement>' +
            '</block>' +
        '</block>'
    ]
];
