let vid;
        document.addEventListener('DOMContentLoaded', init);
        
        function init(){
            /*document.getElementById('btnPlay').addEventListener('click', play);
            document.getElementById('btnPaws').addEventListener('click', paws);
            document.getElementById('btnStop').addEventListener('click', stop);
            document.getElementById('btnRew').addEventListener('click', rew);
            document.getElementById('btnFF').addEventListener('click', ff);*/
            document.getElementById('btn1').addEventListener('click', btn1);
            document.getElementById('btn2').addEventListener('click', btn2);
            document.getElementById('btn3').addEventListener('click', btn3);
            document.getElementById('btn4').addEventListener('click', btn4);
            document.getElementById('btn5').addEventListener('click', btn5);
            document.getElementById('btn6').addEventListener('click', btn6);
            document.getElementById('btn7').addEventListener('click', btn7);
            document.getElementById('btn8').addEventListener('click', btn8);
            document.getElementById('btn9').addEventListener('click', btn9);
            document.getElementById('btn10').addEventListener('click', btn10);
            document.getElementById('btn11').addEventListener('click', btn11);
            document.getElementById('btn12').addEventListener('click', btn12);
            document.getElementById('btn13').addEventListener('click', btn13);
            document.getElementById('btn14').addEventListener('click', btn14);
            document.getElementById('btn15').addEventListener('click', btn15);
            document.getElementById('btn16').addEventListener('click', btn16);
            document.getElementById('btn17').addEventListener('click', btn17);
            document.getElementById('btn18').addEventListener('click', btn18);
            document.getElementById('btn19').addEventListener('click', btn19);
            document.getElementById('btn20').addEventListener('click', btn20);
            document.getElementById('btn21').addEventListener('click', btn21);
            document.getElementById('btn22').addEventListener('click', btn22);
            
            vid = document.getElementById('video');
            console.log( vid );
            console.log({vid})
            let mediaType = vid.type;
            let str = vid.canPlayType("video/mp4");
            console.log(str);
            vid.volume = 0.9;  //  0 - 1
        }
        function btn1(ev){ 
            vid.pause()
            console.log( vid.currentTime);
            vid.currentTime = 5;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn2(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 7;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn3(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 8.5;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn4(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 10;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn5(ev){ 
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
        function btn6(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 15;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn7(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 19;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn8(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 21;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn9(ev){ 
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
        function btn10(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 28;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn11(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 29;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn12(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 32;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn13(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 34;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn14(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 36;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn15(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 46;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn16(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 47;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn17(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 50;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn18(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 52;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn19(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 54;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn20(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 56;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn21(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 60;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn22(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 61;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }