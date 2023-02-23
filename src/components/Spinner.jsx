import spinnerImg from '@assets/loader.gif'

export const Spinner = () => {
  return (
    <span>
      <img
        src={spinnerImg}
        width={150}
        height={150}
        alt='spinner loading'
      />
    </span>
  )
}
