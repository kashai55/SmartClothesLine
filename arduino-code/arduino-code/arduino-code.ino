#include <ESP8266WiFi.h>


//const char* ssid = "HUAWEI_P9_B331";
//const char* password = "hola1234";
const char* ssid = "Redtwo";
const char* password = "lawyer7143";

const char* host = "192.168.1.27";
const int port = 8080;

const int motorA1 = 4;
const int motorA2 = 5;
const int motorB1 = 12;
const int motorB2 = 13;

int sensor = 0;
bool tent_on;
bool line_up;
bool sensor_switch;


WiFiClient client;

void setup() {
  
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
  pinMode(LED_BUILTIN, OUTPUT); //quitar luego
  pinMode(motorA1, OUTPUT); 
  pinMode(motorA2, OUTPUT);
  pinMode(motorB1, OUTPUT); 
  pinMode(motorB2, OUTPUT);
  pinMode(sensor, OUTPUT);
  tent_on = false;
  line_up=false;
  sensor_switch = true;
}

void CheckRain(){
  sensor = digitalRead(14);
  Serial.println("El sensor esta: " + String(sensor_switch));
  if (sensor_switch == false){
    return;
  }
  else if (sensor==LOW && tent_on == false) { //Si el sensor capta agua y el toldo no esta desplegado
    Serial.println("Empieza a haber algo de agua...");
    tentOn();
    //postToServer("clothesline/openclosed","tent_Up=true");
  }
  else if(sensor == HIGH && tent_on == true ){  //Si el sensor NO capta agua y el toldo SI esta desplegado
    Serial.println("Seco");
    tentOff();
    //postToServer("clothesline/openclosed","tent_Up=false");
  }
}

void checkServer(){
  Serial.printf("\n[Connecting to %s ... ", host);
  if (client.connect(host, port)){
    getTent();
   //postToServer("clothesline/updown");
  }
  //delay(1000); //solo para prueba
  Serial.printf("\n[Connecting to %s ... ", host);
  if (client.connect(host, port)){
    getUpDown();
    
  }
  if (client.connect(host, port)){
    getSensor();
  }
  
  else{
    Serial.println("connection failed!]");
    client.stop();
  }
}

String getFromServer(String request){
  client.setTimeout(1000);
  Serial.println("connected]");

  Serial.println("[Sending a " + request + " request]");
  
  client.println("GET /"+ request + " HTTP/1.0");
  client.println("Host: " + String(host));
  client.println("Cache-Control: no-cache");
  client.println("Connection: close");
  client.println();

  Serial.println("[Response:]");
  //String response;
  String linetemp;
  
  while (client.available() || client.connected() ){
    if ( client.available() ){
      String line = client.readStringUntil('\n');
      linetemp = line;
      //response = response + "++++" + line;
      Serial.println(line);
    }
  }
  
  client.stop();
  //Serial.println("mi respuesta es:" + response);
  Serial.println("la respuesta que quiero es:" + linetemp);
  Serial.println("\n[Disconnected]");
  Serial.println("******************************************");
  return linetemp;
}

void getSensor(){                                                        
  String sensorStateServer = getFromServer("clothesline/sensor");
  if (sensorStateServer == "true"){
    sensor_switch = true;
  }
  else if (sensorStateServer == "false"){
    sensor_switch = false; 
  }
}

void getTent(){
  String tentStateServer = getFromServer("clothesline/openclosed");
  if (tentStateServer == "true" && sensor_switch == false){
    digitalWrite(LED_BUILTIN, HIGH);  //ABRIR EL TOLDO
    tentOn();
    //sensor_switch = false;//deshabilitar sensor
  }
  else if (tentStateServer == "false" && sensor_switch == false){ //CERRAR EL TOLDO
    digitalWrite(LED_BUILTIN, LOW);
    tentOff();
    //sensor_switch = true; //habilitar de nuevo el sensor
  }
}

void getUpDown(){
  String lineState = getFromServer("clothesline/updown");
  if (lineState == "true"){
    digitalWrite(LED_BUILTIN, HIGH);  //SUBIR O BAJAR EL TENDEDERO'
    lineUp();
  }
  else if (lineState == "false"){
    digitalWrite(LED_BUILTIN, LOW);
    lineDown();
  }
}

void lineUp(){
  if (line_up == false){
    TurnMotorBLeft(); 
    delay(300);
    TurnOFFB();
    line_up = true;
    delay(100);
  }
}

void lineDown(){
  if (line_up == true){
    TurnMotorBRight(); 
    delay(300);
    TurnOFFB();
    line_up = false;
    delay(100);
    
  }
}

void postToServer(String request,String postData){
  if (client.connect(host, port) ){
    client.setTimeout(100);
    Serial.println("connected]");
  
    Serial.println("[Sending a " + request + " request]");
    
    //postData = "line_Up=holasdesdeesp8266";   esto solo para recordar como escribir la data
    
    client.println("POST /" + request + " HTTP/1.0");
    client.println("Host: " + String(host));
    client.println("Cache-Control: no-cache");
    client.println("Content-Type: application/x-www-form-urlencoded");
    client.print("Content-Length: ");
    client.println(postData.length());
    client.println();
    client.println(postData);
  
    Serial.println("[Response:]");
    String response;
    String linetemp;
    
    while (client.available() || client.connected() ){
      
      if (client.available())
      {
        String line = client.readStringUntil('\n');
        
        //linetemp = line;
        //response = response + "++++" + line;
        
        Serial.println(line);
      }
    }
    
    client.stop();
    //Serial.println("mi respuesta es:" + response);
    //Serial.println("la respuesta que quiro es:" + linetemp);
    Serial.println("\n[Disconnected after post]");
  }
}

void tentOff(){
  if (tent_on == true){
    TurnMotorARight(); 
    delay(1500);
    TurnOFFA();
    tent_on = false;
  }
}

void tentOn(){
  if (tent_on == false){
    TurnMotorALeft(); 
    delay(1500);
    TurnOFFA();
    tent_on = true;
  }
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
  CheckRain();
  checkServer(); 
  delay(5000);
}
