#include <ESP8266WiFi.h>


//const char* ssid = "HUAWEI_P9_B331";
//const char* password = "hola1234";
const char* ssid = "Redtwo";
const char* password = "lawyer7143";

//const char* ssid = "Chang";
//const char* password = "a987654321";
const char* host = "192.168.1.27";
const int port = 8080;

const int motorA1 = 4;
const int motorA2 = 5;
const int motorB1 = 12;
const int motorB2 = 13;

int sensor = 0;
bool tent_on;
bool line_up;

void setup() {
  //Serial.begin(9600);
  Serial.begin(115200);
  Serial.println();

  Serial.printf("Connecting to %s ", ssid);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" connected");
  
  pinMode(motorA1, OUTPUT); 
  pinMode(motorA2, OUTPUT);
  pinMode(motorB1, OUTPUT); 
  pinMode(motorB2, OUTPUT);
  pinMode(sensor, OUTPUT);
  tent_on = false;
  line_up=false;
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

void CheckRain(){
  sensor = digitalRead(14);

  if (sensor==LOW && tent_on == false) { //Si el sensor capta agua y el toldo no esta desplegado
    Serial.println("Empieza a haber algo de agua...");
    TurnMotorALeft(); 
    delay(1500);
    TurnOFFA();
    tent_on = true;
    }
  if(sensor == HIGH && tent_on == true ){  //Si el sensor NO capta agua y el toldo SI esta desplegado
    Serial.println("Seco");
    TurnMotorARight(); 
    delay(1500);
    TurnOFFA();
    tent_on = false;
  }

  //HACER EL POST EL ESTADO DEL TOLDO
}


void loop() {
  CheckRain();
  //HACER EL CheckServer
  delay(500);
}
