import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../assets/loading/loading.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loading = ({width = 400, height = 400}) => <Lottie options={defaultOptions} height={height} width={width} />

export default Loading
