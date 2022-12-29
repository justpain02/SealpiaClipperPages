var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'blue',
    responsive: 'true',
    plugins: [
        RegionsPlugin.create({
            wavesurfer: wavesurfer,
        })
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