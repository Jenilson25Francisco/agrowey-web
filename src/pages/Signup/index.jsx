import { Link } from 'react-router'
import { Input } from '../../components/input'
import { Lock, Mail, User } from 'lucide-react'
import { Button } from '../../components/button'
import { Container, SigninContainer } from './styles'

export function Signup() {
  return (
    <Container>
      <SigninContainer onSubmit={handleSubmit(formSubmit)}>
        <h1>Seja Bem Vindo</h1>
        <div>
          <Input
            placeholder="Digite o seu nome"
            type="text"
            icon={<User color="#6c757d" size={20} />}
            {...register('name')}
          />
          <Input
            placeholder="Digite o seu email"
            type="email"
            icon={<Mail color="#6c757d" size={20} />}
            {...register('email')}
          />

          <Input
            placeholder="Digite a sua senha"
            type="password"
            icon={<Lock color="#6c757d" size={20} />}
            {...register('password')}
          />
        </div>

        <Button>Registrar-se</Button>
        <p>
          Já possui uma conta? <Link to="/">Entre!</Link>
        </p>
      </SigninContainer>

      <img src="/login-image.jpg" alt="Logo" />
    </Container>
  )
}
