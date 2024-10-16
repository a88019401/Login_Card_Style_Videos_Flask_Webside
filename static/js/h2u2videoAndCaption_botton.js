let vid;
        document.addEventListener('DOMContentLoaded', init);
        
        function init(){
            /*document.getElementById('btnPlay').addEventListener('click', play);
            document.getElementById('btnPaws').addEventListener('click', paws);
            document.getElementById('btnStop').addEventListener('click', stop);
            document.getElementById('btnRew').addEventListener('click', rew);
            document.getElementById('btnFF').addEventListener('click', ff);*/
            document.getElementById('H2btn1').addEventListener('click', H2btn1);
            document.getElementById('H2btn2').addEventListener('click', H2btn2);
            document.getElementById('H2btn3').addEventListener('click', H2btn3);
            document.getElementById('H2btn4').addEventListener('click', H2btn4);
            document.getElementById('H2btn5').addEventListener('click', H2btn5);
            document.getElementById('H2btn6').addEventListener('click', H2btn6);
            document.getElementById('H2btn7').addEventListener('click', H2btn7);
            document.getElementById('H2btn8').addEventListener('click', H2btn8);
            document.getElementById('H2btn9').addEventListener('click', H2btn9);
            document.getElementById('H2btn10').addEventListener('click', H2btn10);
            document.getElementById('H2btn11').addEventListener('click', H2btn11);
            document.getElementById('H2btn12').addEventListener('click', H2btn12);
            document.getElementById('H2btn13').addEventListener('click', H2btn13);
            document.getElementById('H2btn14').addEventListener('click', H2btn14);
            document.getElementById('H2btn15').addEventListener('click', H2btn15);
            document.getElementById('H2btn16').addEventListener('click', H2btn16);
     
            vid = document.getElementById('video');
            console.log( vid );
            console.log({vid})
            let mediaType = vid.type;
            let str = vid.canPlayType("video/mp4");
            console.log(str);
            vid.volume = 0.9;  //  0 - 1
        }
        
        function H2btn1(ev){ 
            vid.pause()
            console.log( vid.currentTime);
            vid.currentTime = 6;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });


        }
        function H2btn2(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 11;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn3(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 22;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn4(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 27;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn5(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 35;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn6(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 41;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn7(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 43;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn8(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 48;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn9(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 58;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn10(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 59;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn11(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 65;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn12(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 69;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn13(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 75;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn14(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 78;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn15(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 82;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H2btn16(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 86;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }