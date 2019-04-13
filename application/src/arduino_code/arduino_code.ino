int motorA1 = 4;
int motorA2 = 5;
int motorB1 = 12;
int motorB2 = 13;

//int botonPin = 2;
//int botonPin2 = 4;
//int val = 0;
//int val2 = 0;
int sensor = 0;

bool toldo_desplegado;


void setup() {
  Serial.begin(9600);
  pinMode(motorA1, OUTPUT); 
  pinMode(motorA2, OUTPUT);
  pinMode(motorB1, OUTPUT); 
  pinMode(motorB2, OUTPUT);
  pinMode(sensor, OUTPUT);
  //pinMode(botonPin, INPUT);
  //pinMode(botonPin2, INPUT);
  toldo_desplegado = false;
}

void TurnMotorALeft(){              
  digitalWrite(motorA1, HIGH);
  digitalWrite(motorA2, LOW);
}
void TurnMotorARight(){              
  digitalWrite(motorA1, LOW);
  digitalWrite(motorA2, HIGH);
}
void TurnMotorBLeft(){              
  digitalWrite(motorB1, HIGH);
  digitalWrite(motorB2, LOW);
}
void TurnMotorBRight(){              
  digitalWrite(motorB1, LOW);
  digitalWrite(motorB2, HIGH);
}
void TurnOFFA(){
  digitalWrite(motorA1, LOW);
  digitalWrite(motorA2, LOW);
}

void TurnOFFB(){
  digitalWrite(motorB1, LOW);
  digitalWrite(motorB2, LOW);
}

void loop() {
  //Serial.println("Holi");
  Serial.println(toldo_desplegado);

  //val = digitalRead(botonPin);
  //val2 = digitalRead(botonPin2);
  sensor = digitalRead(14);

  if (sensor==LOW && toldo_desplegado == false) { //Si el sensor capta agua y el toldo no esta desplegado
    Serial.println("Empieza a haber algo de agua...");
    TurnMotorALeft(); 
    delay(1500);
    TurnOFFA();
    toldo_desplegado = true;
    }
  if(sensor == HIGH && toldo_desplegado == true ){  //Si el sensor NO capta agua y el toldo SI esta desplegado
    Serial.println("Seco");
    TurnMotorARight(); 
    delay(1500);
    TurnOFFA();
    toldo_desplegado = false;
  }

  /**
  if (val == LOW){
    TurnMotorBLeft(); 
    delay(300);
    TurnOFFB();ss
    delay(100);
  }
  if (val2 == LOW){
    TurnMotorBRight(); 
    delay(300);
    TurnOFFB();
    delay(100);
  } **/

  delay(500);
  

}
