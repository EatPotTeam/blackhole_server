#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'No test available!'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 startOrRestart ecosystem.config.js --env dev'
            }
        }
    }
}