var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'blue',
    responsive: 'true',
    plugins: [
        WaveSurfer.cursor.create({  // <-- here
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
                'background-color': '#000',
                color: '#fff',
                padding: '2px',
                'font-size': '10px'
            }
        }),
    ]
});

wavesurfer.on('ready', function () {
    var timeline = Object.create(WaveSurfer.Timeline);
  
    timeline.init({
      wavesurfer: wavesurfer,
      container: '#waveform-timeline'
    });
  });

wavesurfer.load('테스트용영상.mp4')