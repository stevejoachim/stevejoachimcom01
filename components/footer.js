import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <p className="py-10 text-center">
          Made with <span className="text-xl">💻</span>. <br />©️2020 Steve Joachim
        </p>
      </Container>
    </footer>
  )
}
