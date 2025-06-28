# Architectural Design Document

## 1. Introduction

This document outlines the architectural design of the Sloe Media Site, a web application built using Next.js and integrated with Google's AI Studio. The primary purpose of this application is to provide a platform for media content, potentially leveraging AI capabilities for content generation, recommendation, or analysis.

## 2. System Overview

The Sloe Media Site is a client-server application. The frontend is a Next.js application, providing a rich user interface. The backend functionalities, particularly those involving AI, will interact with Google's Gemini API via server-side logic within the Next.js framework (e.g., API routes).

## 3. High-Level Architecture

```mermaid
graph TD
    A[User] --> B[Web Browser]
    B --> C[Next.js Frontend]
    C --> D[Next.js API Routes]
    D --> E[Google Gemini API]
    C --> F[Data Storage (e.g., Database, File System)]
````

## 4. Our Work

The following section showcases the images that represent our work and projects:

### Chair Brand

- ![Chair Brand 1](images/chair%20brand%201.jpg)
- ![Chair Brand 2](images/chair%20brand%202.jpg)
- ![Chair Brand 4](images/chair%20brand%204.jpg)

### Food Delivery App

- ![Food Delivery App 1](images/food%20delivery%20app%201.jpg)
- ![Food Delivery App 2](images/food%20delivery%20app%202.jpg)
- ![Food Delivery App 3](images/food%20delivery%20app%203.jpg)
- ![Food Delivery App 4](images/food%20delivery%20app%204.jpg)
- ![Food Delivery App 5](images/food%20delivery%20app%205.jpg)
- ![Food Delivery App 6](images/food%20delivery%20app%206.jpg)

### Headphone Brand

- ![Headphone Brand 2](images/headphone%20brand%202.jpg)

### Save the Planet

- ![Save the Planet 1](images/save%20the%20planet%201.jpg)
