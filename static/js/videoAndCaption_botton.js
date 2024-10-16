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
            document.getElementById('btn23').addEventListener('click', btn23);
            document.getElementById('btn24').addEventListener('click', btn24);
            /*翰林1
            document.getElementById('H1btn1').addEventListener('click', H1btn1);
            document.getElementById('H1btn2').addEventListener('click', H1btn2);
            document.getElementById('H1btn3').addEventListener('click', H1btn3);
            document.getElementById('H1btn4').addEventListener('click', H1btn4);
            document.getElementById('H1btn5').addEventListener('click', H1btn5);
            document.getElementById('H1btn6').addEventListener('click', H1btn6);
            document.getElementById('H1btn7').addEventListener('click', H1btn7);
            document.getElementById('H1btn8').addEventListener('click', H1btn8);
            document.getElementById('H1btn9').addEventListener('click', H1btn9);
            document.getElementById('H1btn10').addEventListener('click', H1btn10);
            document.getElementById('H1btn11').addEventListener('click', H1btn11);
            document.getElementById('H1btn12').addEventListener('click', H1btn12);
            document.getElementById('H1btn13').addEventListener('click', H1btn13);
            document.getElementById('H1btn14').addEventListener('click', H1btn14);
            document.getElementById('H1btn15').addEventListener('click', H1btn15);
            document.getElementById('H1btn16').addEventListener('click', H1btn16);
            document.getElementById('H1btn17').addEventListener('click', H1btn17);
            document.getElementById('H1btn18').addEventListener('click', H1btn18);
            document.getElementById('H1btn19').addEventListener('click', H1btn19);
            document.getElementById('H1btn20').addEventListener('click', H1btn20);
            document.getElementById('H1btn21').addEventListener('click', H1btn21);
            document.getElementById('H1btn22').addEventListener('click', H1btn22);
            document.getElementById('H1btn23').addEventListener('click', H1btn23);
            document.getElementById('H1btn24').addEventListener('click', H1btn24);
            document.getElementById('H1btn25').addEventListener('click', H1btn25);
            */ 
            vid = document.getElementById('video');
            console.log( vid );
            console.log({vid})
            let mediaType = vid.type;
            let str = vid.canPlayType("video/mp4");
            console.log(str);
            vid.volume = 0.9;  //  0 - 1
        }
        /*
        function play(ev){
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
            //after the video starts to play you can access text tracks
            let tt = vid.textTracks;
            let cues = tt[0].cues;
            console.log(tt);
            console.log(`There are ${tt.length} text tracks`);
            console.log( tt[0] );
            console.log( cues );
            console.log( cues.length );
            console.log( cues[0] );
            console.log( cues[0].text );
        }
        function paws(ev){
            vid.pause();
            console.log( vid.currentTime, "of", vid.duration, "seconds played");
            console.log('video is paused. No Promise here');
        }
        function stop(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 0;//用這個來設定字幕跳回去的時間 然後開始按start
        }*/
        function btn1(ev){ 
            vid.pause()
            console.log( vid.currentTime);
            vid.currentTime = 3.57;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 4;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 7;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 12;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 16;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 17;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 19;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 20;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 24;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 27;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 30;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 33;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 35;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 37;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 38;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 40;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 41;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 45;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 47;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 49;//用這個來設定字幕跳回去的時間 然後開始按start
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
            vid.currentTime = 53;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function btn23(ev){ 
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
        function btn24(ev){ 
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
        /*
        function rew(ev){
            console.log( vid.currentTime);
            if( ! vid.fastSeek ){
                vid.currentTime -= 20;
            }else{
                vid.fastSeek(-20)
                .then(()=>{
                    console.log('Video skipped forward 10 seconds')
                })
                .catch(err=>{
                    console.log({err});
                })
            }
            console.log( vid.currentTime);
        }
        function ff(ev){
            console.log( vid.currentTime);
            if( ! vid.fastSeek ){
                vid.currentTime += 20;
            }else{
                vid.fastSeek(20)
                .then(()=>{
                    console.log('Video skipped forward 10 seconds')
                })
                .catch(err=>{
                    console.log({err});
                })
            }
            console.log( vid.currentTime);
        }*/
        /*翰林1
        
        function H1btn1(ev){ 
            vid.pause()
            console.log( vid.currentTime);
            vid.currentTime = 3;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });


        }
        function H1btn2(ev){ 
            vid.pause();
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
        function H1btn3(ev){ 
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
        function H1btn4(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 116;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn5(ev){ 
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
        function H1btn6(ev){ 
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
        function H1btn7(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 24;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn8(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 26;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn9(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 30;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn10(ev){ 
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
        function H1btn11(ev){ 
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
        function H1btn12(ev){ 
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
        function H1btn13(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 40;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn14(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 42;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn15(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 44;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn16(ev){ 
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
        function H1btn17(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 49;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn18(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 51;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn19(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 55;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn20(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 57;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn21(ev){ 
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
        function H1btn22(ev){ 
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
        function H1btn23(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 66;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }
        function H1btn24(ev){ 
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
        function H1btn25(ev){ 
            vid.pause();
            console.log( vid.currentTime);
            vid.currentTime = 72;//用這個來設定字幕跳回去的時間 然後開始按start
            vid.play()
            .then(()=>{
                console.log('video is playing')
            })
            .catch((err)=>{
                console.log( {err} );
            });
        }*/ 