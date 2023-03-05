import Container from './container'

export default function Footer() {
  return (
    <Container>
      <footer className="border-t border-accent-2">
        <p className="py-10 text-center">
          Made with <span className="text-xl">💻</span>.
          <br />
          ©️ 2023 Steve Joachim
        </p>
      </footer>
    </Container>
  )
}
