# Centinel
State manager for react using observer pattern and a custom hook.
## Features
* Less than 1Kb minified
* Simple
* Fast Dev Experience
* Dev full controll



## Installation

Install centinel with npm, bun...

```bash
  npm install centinel
```
    
## Usage/Examples
First define your variables inside a ts file
### Define your state in any way you want
You can use composable objects
```typescript
import { Observable } from "centinel";

export const newExam = {
  name: new Observable<string>(""),
  description: new Observable<string>(""),
  selectedSubjectName: new Observable<string>(""),
  selectedTeacherIDS: new Observable<string[]>([]),
  questions: new Observable<Question[]>([]),
};

```
Or with just simple variables Or Both Or ANYTHING YOU WANT
```typescript
import { Observable } from "centinel";

export subjects = new Observable<Subject[]>([])
export isQuestionDirty = new Observable<boolean>(false)
```

### Use the custom hook to grab the state

```typescript
import { useObserver } from "centinel";

export default function NewTestInteractive() {
  const questions = useObserver(newExam.questions);
  const isAddingQuestion = useObserver(isAddingQuestionObs);

  return (
          {isAddingQuestion && (
          <TempQuestion questionNumbr={questions.length + 1} />
    )}
  );
}
```
### Update the state calling the set method
You can update from another TS File or from any component

**From a ts file with your logic:**

```typescript
import {
  newExam,
} from "./new_exams";


export function addNewQuestion() {
  const newQuestions = newExam.questions.getCopy()
  newQuestions.push(emptyQuestion())
  newExam.questions.set(newQuestions)
  isAddingQuestionObs.set(false)
}

export function handleStartAddingNewAnswer() {
  isAddingAnswerToQuestionObs.set(true)
}
```

**From a react component:**
```typescript
import {
  newExam,
} from "./new_exams";

<Input
    value={name}
    onChange={(e) => newExam.name.set(e.target.value)}
    required={true}
    placeholder="Add Name"/>
```
## Authors

- [@TheSolracBoy](https://www.github.com/TheSolracBoy)

