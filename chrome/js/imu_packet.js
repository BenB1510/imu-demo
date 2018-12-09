"use strict";

var imuData = {a: [0, 0, 0], g: [0, 0, 0], m: [0, 0, 0]};
var imuInfo = {};
var imuStats = {};

function imu_packet_info(packet) {
  try {
    imuInfo = JSON.parse(packet);
    $('div#hud td.imu_rate').text(imuInfo.imu_hz+'Hz')
    $('div#hud td.imu_accel_type').text(imuInfo.accelerometer.type)
    $('div#hud td.imu_gyro_type').text(imuInfo.gyroscope.type)
    $('div#hud td.imu_mag_type').text(imuInfo.magnetometer.type)
  } catch (ignore) {
    console.log("Malformed INFO Packet: ", packet);
  }
}

function imu_packet_stats(packet) {
  try {
    imuStats = JSON.parse(packet);
  } catch (ignore) {
    console.log("Malformed STATS Packet: ", packet);
  }
}

function imu_packet_data(packet) {
  try {
    imuData = JSON.parse(packet);
  } catch (ignore) {
    console.log("Malformed DATA Packet: ", packet);
  }
}