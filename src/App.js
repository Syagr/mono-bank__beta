// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React, { useState } from 'react';
import styled from 'styled-components';

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from './component/Page';
import Header from './component/Header';
import Balance from './component/Balance';
import Menu from './component/Menu';
import Payment from './component/Payment';

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;
const SALARY_AMOUNT = 2500;
const COURSE_PRICE = 41;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  //Функціонал Транзакцій=========================================

  const [payment, setPayment] = React.useState([]);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);

    setPayment([
      {
        name: 'зарплата',
        amount: SALARY_AMOUNT,
        type: '+',
      },
      ...payment,
    ]);
  };

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);

    setPayment([
      {
        name: 'Оплата курсу',
        amount: COURSE_PRICE,
        type: '-',
      },
      ...payment,
    ]);
  };

  const buyFood = () => {
    setBalance(balance - 240);

    setPayment([
      {
        name: 'Оплата їжі',
        amount: 240,
        type: '*',
      },
      ...payment,
    ]);
  };
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const Login = 'Syagr';
  const Password = '7777';

  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt('Ваш Логін');
    const password = prompt('Ваш пароль');

    if (login === Login && password === Password) {
      alert('Ви увійшли!');
      setLogged(true);
    } else {
      if (login !== Login && password !== Password) {
        return alert('помилка в логіні та паролі');
      }
      if (login !== Login) {
        return alert('Помилка в логіні');
      }

      if (password !== PASSWORD) {
        return alert('Помилка в помилка в паролі');
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="FAKE BANK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      {/* Компонент меню з кнопками */}
      {isLogged && (
        <Menu
          // ось сюди ми передаємо конфігурацію кнопок
          config={[
            {
              name: 'Поповнити баланс',
              onClick: getMoney,
              img: '/icon/get.svg',
            },
            {
              name: 'Отримати зарплату',
              onClick: getSalary,
              img: '/icon/payment.svg',
            },
            {
              name: 'Купити курс',
              onClick: buyCourse,
              img: '/icon/send.svg',
            },
            {
              name: "Купити їжу в McDonald's",
              onClick: buyFood,
              img: '/icon/cat.svg',
            },
          ]}
        />
      )}
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>Вам потрібно увійти в акаунт</NotLogged>
      )}
    </Page>
  );
}

const NotLogged = styled.div`
  padding: 100px 30px;
  background: #000;
  color: #fff;
  text-align: center;

  margin-top: 100px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
