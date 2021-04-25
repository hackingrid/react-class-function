# React Component class vs function 

## 리액트는 함수스타일과 클래스 스타일 모두를 지원한다.

## class 문법
- 리액트 기능 풀파워로 사용가능
- 클래스 문법을 알아야 함 (장황함)

## function 문법
- 함수 문법만 알면 사용가능
- 기능 부족함
- 컴포넌트 내부에 스테이트 만들어 사용 불가
- 컴포넌트의 라이프사이클 API 사용 불가
- 상위 컴포넌트가 시키는 일만 하는 단순한 컴포넌트를 만들 때 사용했었음

## 최신 리액트에서 hook 등장 
- 함수 방식에서도 내부적으로 상태를 다룰 수 있게됨
- 컴포넌트 라이프사이클에 따라 해야할 작업 정리 가능
- 클래스 심부름꾼 이던 함수가 클래스처럼 세짐



```
npx create-react-app .
```